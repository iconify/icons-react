import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qr9_a__7z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="qr9_a__7z"/>`,
		"fallback": "reicon:palette2",
	});
}

export default Component;
