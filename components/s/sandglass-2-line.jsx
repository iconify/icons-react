import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gkv2i5z9v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gkv2i5z9v"/>`,
		"fallback": "mingcute:sandglass-2-line",
	});
}

export default Component;
