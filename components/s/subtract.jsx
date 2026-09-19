import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q_qiu8wtc.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q_qiu8wtc"/>`,
		"fallback": "carbon:subtract",
	});
}

export default Component;
