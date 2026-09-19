import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ik69wfwmd.css';

const viewBox = {"width":496,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ik69wfwmd"/>`,
		"fallback": "fa-solid:laugh-squint",
	});
}

export default Component;
