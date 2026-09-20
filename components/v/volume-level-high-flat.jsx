import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bacal3i_r.css';
import '../../css/p/pc4_1nbys.css';
import '../../css/e/e4git8bpn.css';
import '../../css/l/ll1jvjyaj.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="bacal3i_r"/><path clip-rule="evenodd" class="pc4_1nbys"/><path clip-rule="evenodd" class="e4git8bpn"/><path class="ll1jvjyaj"/></g>`,
		"fallback": "streamline-plump-color:volume-level-high-flat",
	});
}

export default Component;
