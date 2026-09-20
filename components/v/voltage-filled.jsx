import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ubk51wbwk.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ubk51wbwk"/>`,
		"fallback": "ix:voltage-filled",
	});
}

export default Component;
