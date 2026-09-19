import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pn2reo3hk.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pn2reo3hk"/>`,
		"fallback": "fluent-mdl2:save",
	});
}

export default Component;
