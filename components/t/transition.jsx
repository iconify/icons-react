import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hhkln9eeu.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hhkln9eeu"/>`,
		"fallback": "fluent-mdl2:transition",
	});
}

export default Component;
