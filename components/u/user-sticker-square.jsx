import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/o/of-8ljb3p.css';
import '../../css/e/ed332-b0a.css';
import '../../css/b/bb-e3mbpr.css';
import '../../css/q/qe5vdnbmc.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="of-8ljb3p"/><path class="ed332-b0a"/><path class="bb-e3mbpr"/><path class="qe5vdnbmc"/></g>`,
		"fallback": "streamline-plump-color:user-sticker-square",
	});
}

export default Component;
