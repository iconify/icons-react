import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/t/t3_m6sbmj.css';
import '../../css/p/pkxgxgb2j.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="t3_m6sbmj"/><path class="pkxgxgb2j"/></g>`,
		"fallback": "streamline-plump-color:pool-ladder",
	});
}

export default Component;
