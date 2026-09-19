import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/guqkcthtw.css';

const viewBox = {"width":1536,"height":1408};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="guqkcthtw"/>`,
		"fallback": "fa:sliders",
	});
}

export default Component;
