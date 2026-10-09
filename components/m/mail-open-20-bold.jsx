import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uzzrkrbqw.css';
import '../../css/y/ya12bvd4o.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uzzrkrbqw"/><path class="ya12bvd4o"/>`,
		"fallback": "energy-icons:mail-open-20-bold",
	});
}

export default Component;
