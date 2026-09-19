import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bocvvbcei.css';

const viewBox = {"width":480,"height":384};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bocvvbcei"/>`,
		"fallback": "zmdi:shape",
	});
}

export default Component;
