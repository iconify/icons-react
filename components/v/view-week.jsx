import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xt3t5jbtn.css';

const viewBox = {"width":408,"height":384};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xt3t5jbtn"/>`,
		"fallback": "zmdi:view-week",
	});
}

export default Component;
