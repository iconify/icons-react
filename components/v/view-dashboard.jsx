import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sg_6_5bdh.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sg_6_5bdh"/>`,
		"fallback": "fluent-mdl2:view-dashboard",
	});
}

export default Component;
