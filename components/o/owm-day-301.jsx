import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/frrqm0b6m.css';

const viewBox = {"width":30,"height":30};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="frrqm0b6m"/>`,
		"fallback": "wi:owm-day-301",
	});
}

export default Component;
