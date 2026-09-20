import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mh1gwvm1s.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mh1gwvm1s"/>`,
		"fallback": "streamline:interface-arrows-data-transfer-diagonal-arrows-arrow-server-data-diagonal-internet-transfer-network",
	});
}

export default Component;
