import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/elkemnoca.css';
import '../../css/e/euqgn5mmt.css';
import '../../css/e/e14c7vbab.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="elkemnoca"/><path class="euqgn5mmt"/><path clip-rule="evenodd" class="e14c7vbab"/></g>`,
		"fallback": "streamline-plump-color:no-smaking-area-flat",
	});
}

export default Component;
