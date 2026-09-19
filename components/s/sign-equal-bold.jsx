import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kv2yl7bqp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kv2yl7bqp"/>`,
		"fallback": "iconamoon:sign-equal-bold",
	});
}

export default Component;
