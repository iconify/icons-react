import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sx606acgb.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sx606acgb"/>`,
		"fallback": "system-uicons:scale-contract",
	});
}

export default Component;
