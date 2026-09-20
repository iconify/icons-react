import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/t9fh2erkx.css';
import '../../css/x/xv-t7xe0a.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="t9fh2erkx"/><path clip-rule="evenodd" class="xv-t7xe0a"/></g>`,
		"fallback": "streamline-plump-color:spotify-flat",
	});
}

export default Component;
