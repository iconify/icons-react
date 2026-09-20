import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wouy48bnn.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wouy48bnn"/>`,
		"fallback": "streamline:interface-page-controller-button-loop-2-multimedia-multi-button-repeat-media-loop-infinity-controls",
	});
}

export default Component;
