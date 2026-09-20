import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w5knuwi0n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="w5knuwi0n"/>`,
		"fallback": "streamline-sharp:iris-scan-remix",
	});
}

export default Component;
