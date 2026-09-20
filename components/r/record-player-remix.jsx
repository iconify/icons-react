import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fc5c167yd.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="fc5c167yd"/>`,
		"fallback": "streamline-flex:record-player-remix",
	});
}

export default Component;
