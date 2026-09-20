import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wxdhfkbub.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="wxdhfkbub"/>`,
		"fallback": "ix:refresh-arrow-down",
	});
}

export default Component;
