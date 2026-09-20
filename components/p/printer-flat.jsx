import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h1mcx-bxm.css';
import '../../css/m/me8uw8b3d.css';
import '../../css/t/tbhzdihwz.css';
import '../../css/x/xouilc46a.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="h1mcx-bxm"/><path clip-rule="evenodd" class="me8uw8b3d"/><path clip-rule="evenodd" class="tbhzdihwz"/><path clip-rule="evenodd" class="xouilc46a"/></g>`,
		"fallback": "streamline-plump-color:printer-flat",
	});
}

export default Component;
