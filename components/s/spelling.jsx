import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nvf0mjb8o.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nvf0mjb8o"/>`,
		"fallback": "fluent-mdl2:spelling",
	});
}

export default Component;
