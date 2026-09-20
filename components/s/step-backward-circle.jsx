import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bvtxr9b2a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bvtxr9b2a"/>`,
		"fallback": "uil:step-backward-circle",
	});
}

export default Component;
