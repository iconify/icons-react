import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/emzaeubkj.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="emzaeubkj"/>`,
		"fallback": "ix:shield-broken-filled",
	});
}

export default Component;
