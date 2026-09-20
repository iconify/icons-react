import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wuklvzb5o.css';

const viewBox = {"width":30,"height":30};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wuklvzb5o"/>`,
		"fallback": "wi:night-rain-mix",
	});
}

export default Component;
