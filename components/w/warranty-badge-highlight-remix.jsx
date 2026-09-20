import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qzebkbcpz.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="qzebkbcpz"/>`,
		"fallback": "streamline-flex:warranty-badge-highlight-remix",
	});
}

export default Component;
