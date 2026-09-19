import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tgeq8db_h.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tgeq8db_h"/>`,
		"fallback": "fluent-mdl2:waffle",
	});
}

export default Component;
