import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nwemq-b_d.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="nwemq-b_d"/>`,
		"fallback": "streamline-flex:screwdriver-wrench-remix",
	});
}

export default Component;
