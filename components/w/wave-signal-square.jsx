import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/k/kd1xldbgq.css';
import '../../css/c/copwssbpe.css';
import '../../css/b/b-od7uhdd.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="kd1xldbgq"/><path class="copwssbpe"/><path class="b-od7uhdd"/></g>`,
		"fallback": "streamline-plump-color:wave-signal-square",
	});
}

export default Component;
