import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/ht8bghaxx.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ht8bghaxx"/>`,
		"fallback": "fluent-mdl2:uneditable-solid-12",
	});
}

export default Component;
