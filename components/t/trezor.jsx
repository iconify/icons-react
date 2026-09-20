import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qcymh9lsa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qcymh9lsa"/>`,
		"fallback": "thesvg-color:trezor",
	});
}

export default Component;
