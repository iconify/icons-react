import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u7o8b1iri.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u7o8b1iri"/>`,
		"fallback": "mingcute:sun-2-line",
	});
}

export default Component;
