import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e_zhne32i.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e_zhne32i"/>`,
		"fallback": "cib:quantcast",
	});
}

export default Component;
