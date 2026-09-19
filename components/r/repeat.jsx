import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bw1d3gbyx.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bw1d3gbyx"/>`,
		"fallback": "f7:repeat",
	});
}

export default Component;
