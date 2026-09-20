import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iz8e6mgxq.css';
import '../../css/v/vj-egbxkh.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iz8e6mgxq"/><path class="vj-egbxkh"/>`,
		"fallback": "streamline-pixel:interface-essential-direction-button",
	});
}

export default Component;
