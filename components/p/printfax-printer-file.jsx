import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u75jbkxvq.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u75jbkxvq"/>`,
		"fallback": "fluent-mdl2:printfax-printer-file",
	});
}

export default Component;
