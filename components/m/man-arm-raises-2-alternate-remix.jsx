import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mime5u9mm.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="mime5u9mm"/>`,
		"fallback": "streamline-plump:man-arm-raises-2-alternate-remix",
	});
}

export default Component;
