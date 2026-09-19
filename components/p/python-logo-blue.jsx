import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x-y3f3b-m.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x-y3f3b-m"/>`,
		"fallback": "fluent-mdl2:python-logo-blue",
	});
}

export default Component;
