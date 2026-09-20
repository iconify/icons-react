import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y449jb5ie.css';

const viewBox = {"width":29.574,"height":7.976};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y449jb5ie"/>`,
		"fallback": "thesvg-color:pluto-tv",
	});
}

export default Component;
