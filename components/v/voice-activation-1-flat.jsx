import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/a/azxo7r7_y.css';
import '../../css/t/tpemhdl9p.css';
import '../../css/k/kbfndbc2p.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="azxo7r7_y"/><path class="tpemhdl9p"/><path class="kbfndbc2p"/></g>`,
		"fallback": "streamline-plump-color:voice-activation-1-flat",
	});
}

export default Component;
