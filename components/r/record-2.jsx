import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qr5agrbuc.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qr5agrbuc"/>`,
		"fallback": "fluent-mdl2:record-2",
	});
}

export default Component;
