import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/z/z9kuqmblh.css';
import '../../css/u/ulnochbdz.css';
import '../../css/h/hl-r-qbsz.css';
import '../../css/u/ungx3yzbb.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="z9kuqmblh"/><path class="ulnochbdz"/><path class="hl-r-qbsz"/><path class="ungx3yzbb"/></g>`,
		"fallback": "streamline-plump-color:potted-flower",
	});
}

export default Component;
