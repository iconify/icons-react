import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/x9po5oupe.css';
import '../../css/y/yzc-hjbtc.css';
import '../../css/o/oi80i7wcp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="x9po5oupe"/><path class="yzc-hjbtc"/><path class="oi80i7wcp"/></g>`,
		"fallback": "lucide:ship",
	});
}

export default Component;
