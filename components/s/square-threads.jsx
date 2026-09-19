import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/td1lfabfj.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="td1lfabfj"/>`,
		"fallback": "fa6-brands:square-threads",
	});
}

export default Component;
