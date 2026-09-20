import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hjh784b5x.css';
import '../../css/c/cx2ml4bxo.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="hjh784b5x"/><path class="cx2ml4bxo"/>`,
		"fallback": "selfhst:reddit",
	});
}

export default Component;
