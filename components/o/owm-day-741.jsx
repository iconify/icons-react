import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uxs2libfz.css';

const viewBox = {"width":30,"height":30};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uxs2libfz"/>`,
		"fallback": "wi:owm-day-741",
	});
}

export default Component;
