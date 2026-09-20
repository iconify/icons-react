import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kgh6tbbcr.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kgh6tbbcr"/>`,
		"fallback": "streamline:interface-arrows-data-trasnfer-vertical-arrow-server-arrows-data-vertical-internet-transfer-network",
	});
}

export default Component;
