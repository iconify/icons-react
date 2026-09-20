import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/g/gnd7n2qlj.css';
import '../../css/e/e1b0kozst.css';
import '../../css/b/bjuz7p67a.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="gnd7n2qlj"/><path class="e1b0kozst"/><path class="bjuz7p67a"/></g>`,
		"fallback": "streamline-plump-color:money-cash-bill-1",
	});
}

export default Component;
