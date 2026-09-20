import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/df-d0zb1d.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="df-d0zb1d"/>`,
		"fallback": "streamline-plump:threat-phone-remix",
	});
}

export default Component;
