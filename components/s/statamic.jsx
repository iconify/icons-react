import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oypxq_y1j.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oypxq_y1j"/>`,
		"fallback": "cib:statamic",
	});
}

export default Component;
