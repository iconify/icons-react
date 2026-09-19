import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wh-t7_bsg.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wh-t7_bsg"/>`,
		"fallback": "fluent-mdl2:triangle-up-12",
	});
}

export default Component;
