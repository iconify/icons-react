import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h6lg6p6yy.css';
import '../../css/l/li_j9dbhw.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="h6lg6p6yy"/><path class="li_j9dbhw"/></g>`,
		"fallback": "streamline-plump-color:text-box-1-flat",
	});
}

export default Component;
