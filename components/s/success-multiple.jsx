import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eg-h_4-0i.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="eg-h_4-0i"/>`,
		"fallback": "ix:success-multiple",
	});
}

export default Component;
