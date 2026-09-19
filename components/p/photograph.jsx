import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xtksr2b6j.css';
import '../../css/j/j4-0chb9k.css';
import '../../css/r/ratngrhrv.css';

const viewBox = {"width":27,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xtksr2b6j"/><path class="j4-0chb9k"/><path class="ratngrhrv"/>`,
		"fallback": "fontisto:photograph",
	});
}

export default Component;
