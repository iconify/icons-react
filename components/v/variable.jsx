import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tdy54zbru.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tdy54zbru"/>`,
		"fallback": "fluent-mdl2:variable",
	});
}

export default Component;
