import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qngno3bwp.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qngno3bwp"/>`,
		"fallback": "fa6-solid:person-skating",
	});
}

export default Component;
