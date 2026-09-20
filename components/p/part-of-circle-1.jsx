import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fl7p-6xcz.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fl7p-6xcz"/>`,
		"fallback": "subway:part-of-circle-1",
	});
}

export default Component;
