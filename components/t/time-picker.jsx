import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/re_271bop.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="re_271bop"/>`,
		"fallback": "fluent-mdl2:time-picker",
	});
}

export default Component;
