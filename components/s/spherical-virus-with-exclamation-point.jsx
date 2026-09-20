import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yavt7lb5r.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yavt7lb5r"/>`,
		"fallback": "pinhead:spherical-virus-with-exclamation-point",
	});
}

export default Component;
