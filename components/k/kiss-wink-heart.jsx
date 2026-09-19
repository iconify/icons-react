import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xrk10cbfe.css';

const viewBox = {"width":504,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xrk10cbfe"/>`,
		"fallback": "fa-regular:kiss-wink-heart",
	});
}

export default Component;
