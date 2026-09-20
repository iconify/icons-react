import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/g/g7z1o33yi.css';
import '../../css/y/y26arsq-q.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><rect class="g7z1o33yi"/><path class="y26arsq-q"/></g>`,
		"fallback": "streamline:money-cashier-qr-code-codes-tags-code-qr",
	});
}

export default Component;
