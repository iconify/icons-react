import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k-lohbbkh.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k-lohbbkh"/>`,
		"fallback": "streamline:interface-arrows-all-direction-move-button-arrows-direction",
	});
}

export default Component;
