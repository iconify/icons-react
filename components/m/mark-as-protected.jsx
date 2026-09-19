import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l1hr5fdkj.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l1hr5fdkj"/>`,
		"fallback": "fluent-mdl2:mark-as-protected",
	});
}

export default Component;
