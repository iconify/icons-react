import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/npt625gin.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="npt625gin"/>`,
		"fallback": "fluent-mdl2:survey-questions",
	});
}

export default Component;
