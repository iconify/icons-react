import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kpp5awb1r.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kpp5awb1r"/>`,
		"fallback": "la:male-solid",
	});
}

export default Component;
