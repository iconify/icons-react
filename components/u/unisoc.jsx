import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/edp4vc3jr.css';

const viewBox = {"width":49.2,"height":49.2,"left":19.5,"top":18.3};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="edp4vc3jr"/>`,
		"fallback": "thesvg-color:unisoc",
	});
}

export default Component;
