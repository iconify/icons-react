import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wviqy1b1v.css';
import '../../css/u/u0a-6yb5i.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="wviqy1b1v"/><path class="u0a-6yb5i"/></g>`,
		"fallback": "streamline-plump-color:stock-flat",
	});
}

export default Component;
