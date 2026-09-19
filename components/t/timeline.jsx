import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tyypr-b2y.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tyypr-b2y"/>`,
		"fallback": "fluent-mdl2:timeline",
	});
}

export default Component;
