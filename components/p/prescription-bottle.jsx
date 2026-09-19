import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/njk0u4giu.css';

const viewBox = {"width":384,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="njk0u4giu"/>`,
		"fallback": "fa6-solid:prescription-bottle",
	});
}

export default Component;
