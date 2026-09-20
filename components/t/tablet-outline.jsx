import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hk6jsc0yv.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hk6jsc0yv"/>`,
		"fallback": "teenyicons:tablet-outline",
	});
}

export default Component;
