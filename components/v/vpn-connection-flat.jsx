import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kru3nxblp.css';
import '../../css/j/jmr-anpkd.css';
import '../../css/x/x4jk-achl.css';
import '../../css/z/zr-t1cbvh.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="kru3nxblp"/><path clip-rule="evenodd" class="jmr-anpkd"/><path class="x4jk-achl"/><path class="zr-t1cbvh"/></g>`,
		"fallback": "streamline-plump-color:vpn-connection-flat",
	});
}

export default Component;
