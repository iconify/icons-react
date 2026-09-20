import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mqur53baa.css';

const viewBox = {"width":30,"height":30};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mqur53baa"/>`,
		"fallback": "wi:owm-day-521",
	});
}

export default Component;
