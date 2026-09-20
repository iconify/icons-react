import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ntlnahbnk.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ntlnahbnk"/>`,
		"fallback": "streamline-plump:octagram-shape",
	});
}

export default Component;
