import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uhxs1y3oh.css';
import '../../css/h/hvw76hbuq.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uhxs1y3oh"/><path class="hvw76hbuq"/>`,
		"fallback": "carbon:script",
	});
}

export default Component;
