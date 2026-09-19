import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y5cg8fb9r.css';
import '../../css/h/hs15a5npu.css';
import '../../css/q/qnuwo-b8n.css';
import '../../css/f/fi_rz_b5r.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y5cg8fb9r"><path class="hs15a5npu"/><path class="qnuwo-b8n"/><path class="fi_rz_b5r"/></g>`,
		"fallback": "icon-park-solid:sailboat",
	});
}

export default Component;
