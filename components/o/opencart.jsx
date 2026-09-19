import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/obyc_pxxb.css';

const viewBox = {"width":2336,"height":1664};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="obyc_pxxb"/>`,
		"fallback": "fa:opencart",
	});
}

export default Component;
