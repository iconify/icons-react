import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ezs_2ymoz.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ezs_2ymoz"/>`,
		"fallback": "la:pizza-slice-solid",
	});
}

export default Component;
