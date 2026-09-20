import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oi9w2m9_m.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oi9w2m9_m"/>`,
		"fallback": "picon:jump",
	});
}

export default Component;
