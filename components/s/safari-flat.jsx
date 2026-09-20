import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/t9fh2erkx.css';
import '../../css/t/tx20y6vne.css';
import '../../css/x/x8iqiy3dj.css';
import '../../css/w/wvduwlblc.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="t9fh2erkx"/><path clip-rule="evenodd" class="tx20y6vne"/><path class="x8iqiy3dj"/><path class="wvduwlblc"/></g>`,
		"fallback": "streamline-plump-color:safari-flat",
	});
}

export default Component;
