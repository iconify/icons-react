import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/i/i-4ff-but.css';
import '../../css/z/z3xq6mbmt.css';
import '../../css/l/lndy6cqmx.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><rect class="i-4ff-but"/><rect class="z3xq6mbmt"/><path class="lndy6cqmx"/></g>`,
		"fallback": "streamline:interface-page-controller-loading-2-progress-loading-line-load-wait-waiting",
	});
}

export default Component;
