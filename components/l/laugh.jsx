import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qh44u181c.css';

const viewBox = {"width":496,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qh44u181c"/>`,
		"fallback": "fa-regular:laugh",
	});
}

export default Component;
