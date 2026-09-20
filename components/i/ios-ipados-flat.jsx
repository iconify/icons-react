import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nfsdq_mlk.css';
import '../../css/r/r26a9zbbk.css';
import '../../css/q/qbywzybli.css';
import '../../css/i/ir6jchbku.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="nfsdq_mlk"/><path class="r26a9zbbk"/><path clip-rule="evenodd" class="qbywzybli"/><path clip-rule="evenodd" class="ir6jchbku"/></g>`,
		"fallback": "streamline-plump-color:ios-ipados-flat",
	});
}

export default Component;
