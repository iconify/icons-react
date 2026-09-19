import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/awu1eodbb.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="awu1eodbb"/>`,
		"fallback": "fa-brands:jsfiddle",
	});
}

export default Component;
