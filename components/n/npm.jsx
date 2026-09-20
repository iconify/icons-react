import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/juvuk6mdh.css';
import '../../css/f/fi4s-dblz.css';

const viewBox = {"width":2500,"height":2500};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="juvuk6mdh"/><path class="fi4s-dblz"/>`,
		"fallback": "thesvg-color:npm",
	});
}

export default Component;
