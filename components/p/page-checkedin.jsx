import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jvhw2-b0c.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jvhw2-b0c"/>`,
		"fallback": "fluent-mdl2:page-checkedin",
	});
}

export default Component;
