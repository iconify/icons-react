import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kas91xble.css';
import '../../css/i/i6fw0lb8b.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="kas91xble"/><path class="i6fw0lb8b"/></g>`,
		"fallback": "streamline-plump-color:panoramic-screen-flat",
	});
}

export default Component;
