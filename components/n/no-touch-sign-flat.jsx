import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/btaz_tbgs.css';
import '../../css/m/mom_jubcc.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="btaz_tbgs"/><path clip-rule="evenodd" class="mom_jubcc"/></g>`,
		"fallback": "streamline-plump-color:no-touch-sign-flat",
	});
}

export default Component;
