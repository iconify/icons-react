import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jgljnwlus.css';
import '../../css/s/stlc3bbfz.css';

const viewBox = {"width":192.46,"height":222.23};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jgljnwlus"/><path class="stlc3bbfz"/>`,
		"fallback": "thesvg-color:tikv",
	});
}

export default Component;
