import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fwg97objp.css';
import '../../css/h/hxjbwwbtn.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fwg97objp"/><path class="hxjbwwbtn"/>`,
		"fallback": "famicons:logo-amazon",
	});
}

export default Component;
