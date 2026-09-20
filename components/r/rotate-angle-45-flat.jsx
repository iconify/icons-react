import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e7xctpbbo.css';
import '../../css/g/gv04lno8w.css';
import '../../css/e/ezvz3nfau.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="e7xctpbbo"><path class="gv04lno8w"/><path class="ezvz3nfau"/></g>`,
		"fallback": "streamline-color:rotate-angle-45-flat",
	});
}

export default Component;
