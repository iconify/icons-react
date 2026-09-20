import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n2cph-6yb.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="n2cph-6yb"/>`,
		"fallback": "ix:pc-tower-settings",
	});
}

export default Component;
