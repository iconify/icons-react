import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/if1i_5bwm.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="if1i_5bwm"/>`,
		"fallback": "streamline-flex:receipt-remix",
	});
}

export default Component;
