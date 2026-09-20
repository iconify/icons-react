import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fc2e3ggwp.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="fc2e3ggwp"/>`,
		"fallback": "streamline:transfer-truck-time-remix",
	});
}

export default Component;
