import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t5pwa2bid.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="t5pwa2bid"/>`,
		"fallback": "streamline-plump:select-circle-area-1-remix",
	});
}

export default Component;
