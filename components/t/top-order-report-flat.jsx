import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/da3ixmhju.css';
import '../../css/m/mx1pcmcfu.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="da3ixmhju"/><path class="mx1pcmcfu"/></g>`,
		"fallback": "streamline-plump-color:top-order-report-flat",
	});
}

export default Component;
