import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vmhpr2b0c.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vmhpr2b0c"/>`,
		"fallback": "la:ruler-combined-solid",
	});
}

export default Component;
