import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i0cksp2iz.css';
import '../../css/x/xcjnzfb6j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i0cksp2iz"/><path class="xcjnzfb6j"/>`,
		"fallback": "solar:parentheses-bold-duotone",
	});
}

export default Component;
