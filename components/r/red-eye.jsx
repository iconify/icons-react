import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s4cxv_1zs.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s4cxv_1zs"/>`,
		"fallback": "fluent-mdl2:red-eye",
	});
}

export default Component;
