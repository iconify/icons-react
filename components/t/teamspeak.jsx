import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/usk-ftaob.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="usk-ftaob"/>`,
		"fallback": "fa6-brands:teamspeak",
	});
}

export default Component;
