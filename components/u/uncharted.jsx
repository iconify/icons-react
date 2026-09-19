import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u4svqmplo.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u4svqmplo"/>`,
		"fallback": "fa-brands:uncharted",
	});
}

export default Component;
