import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/l/lulau1b0x.css';
import '../../css/f/fgiip1h-x.css';
import '../../css/l/l4nigsmer.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path clip-rule="evenodd" class="lulau1b0x"/><path class="fgiip1h-x"/><path class="l4nigsmer"/></g>`,
		"fallback": "streamline-plump-color:recycle-1",
	});
}

export default Component;
