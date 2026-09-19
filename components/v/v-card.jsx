import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/te2je-_dw.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="te2je-_dw"/>`,
		"fallback": "entypo:v-card",
	});
}

export default Component;
