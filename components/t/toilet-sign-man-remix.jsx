import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ouhj3-wyn.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ouhj3-wyn"/>`,
		"fallback": "streamline-plump:toilet-sign-man-remix",
	});
}

export default Component;
