import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h7jtw93ax.css';
import '../../css/z/zgc-jzu5e.css';
import '../../css/o/oawpsxb-v.css';
import '../../css/o/o38dyhlqw.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="h7jtw93ax"/><path class="zgc-jzu5e"/><path clip-rule="evenodd" class="oawpsxb-v"/><path clip-rule="evenodd" class="o38dyhlqw"/></g>`,
		"fallback": "streamline-plump-color:threat-phone-flat",
	});
}

export default Component;
