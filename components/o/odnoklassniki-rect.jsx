import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qza9p6emh.css';

const viewBox = {"width":1000,"height":1000};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qza9p6emh"/>`,
		"fallback": "brandico:odnoklassniki-rect",
	});
}

export default Component;
