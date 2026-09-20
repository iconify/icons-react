import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vvn4oz9uw.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="vvn4oz9uw"/>`,
		"fallback": "streamline-flex:layers-1-remix",
	});
}

export default Component;
