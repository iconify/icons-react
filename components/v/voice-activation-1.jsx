import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n2sqb8kvn.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n2sqb8kvn"/>`,
		"fallback": "streamline-plump:voice-activation-1",
	});
}

export default Component;
