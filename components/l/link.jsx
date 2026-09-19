import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ni6r_2b-r.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ni6r_2b-r"/>`,
		"fallback": "fluent-mdl2:link",
	});
}

export default Component;
