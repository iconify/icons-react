import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/io4ioibvl.css';
import '../../css/j/jo6nsp46f.css';
import '../../css/i/i9f7wybal.css';
import '../../css/k/kwjxvk0zc.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="io4ioibvl"/><path class="jo6nsp46f"/><path clip-rule="evenodd" class="i9f7wybal"/><path clip-rule="evenodd" class="kwjxvk0zc"/></g>`,
		"fallback": "streamline-plump-color:notification-alert-flat",
	});
}

export default Component;
