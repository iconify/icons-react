import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o_v5ysu5x.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o_v5ysu5x"/>`,
		"fallback": "la:phone-solid",
	});
}

export default Component;
