import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mv8pwk9eg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mv8pwk9eg"/>`,
		"fallback": "noviair:unlink",
	});
}

export default Component;
