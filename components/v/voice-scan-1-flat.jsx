import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nvy57irwd.css';
import '../../css/t/t-qjqvw9t.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="nvy57irwd"/><path class="t-qjqvw9t"/></g>`,
		"fallback": "streamline-plump-color:voice-scan-1-flat",
	});
}

export default Component;
