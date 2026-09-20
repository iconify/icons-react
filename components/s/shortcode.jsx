import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qd83idj5a.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qd83idj5a"/>`,
		"fallback": "lineicons:shortcode",
	});
}

export default Component;
