import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/m/m453z0aue.css';
import '../../css/z/zwjimdbzx.css';
import '../../css/p/pd8fwk-xu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><path class="m453z0aue"/><path class="zwjimdbzx"/><path class="pd8fwk-xu"/></g>`,
		"fallback": "iconamoon:lock-thin",
	});
}

export default Component;
