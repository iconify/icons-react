import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oa35v-cta.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oa35v-cta"/>`,
		"fallback": "carbon:logo-digg",
	});
}

export default Component;
