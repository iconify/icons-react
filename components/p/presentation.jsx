import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/awf1jackb.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="awf1jackb"/>`,
		"fallback": "fluent-mdl2:presentation",
	});
}

export default Component;
