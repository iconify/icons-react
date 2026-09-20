import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wite9bc0b.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="wite9bc0b"/>`,
		"fallback": "streamline-flex:wave-signal-circle-remix",
	});
}

export default Component;
