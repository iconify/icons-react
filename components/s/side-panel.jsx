import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gfqat15hh.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gfqat15hh"/>`,
		"fallback": "fluent-mdl2:side-panel",
	});
}

export default Component;
