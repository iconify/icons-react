import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lm_kd6_tw.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lm_kd6_tw"/>`,
		"fallback": "carbon:rain-scattered-night",
	});
}

export default Component;
