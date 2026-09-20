import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b1joz46qt.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="b1joz46qt"/>`,
		"fallback": "streamline-plump:voice-activation-1-remix",
	});
}

export default Component;
