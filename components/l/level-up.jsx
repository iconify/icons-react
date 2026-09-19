import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lt_n3ccpd.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lt_n3ccpd"/>`,
		"fallback": "icons8:level-up",
	});
}

export default Component;
