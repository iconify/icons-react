import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nwh0__bjb.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nwh0__bjb"/>`,
		"fallback": "la:venus-double-solid",
	});
}

export default Component;
