import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ebc46_dxn.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ebc46_dxn"/>`,
		"fallback": "la:piggy-bank-solid",
	});
}

export default Component;
