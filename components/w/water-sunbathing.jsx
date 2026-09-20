import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x6mr8zbho.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x6mr8zbho"/>`,
		"fallback": "ix:water-sunbathing",
	});
}

export default Component;
