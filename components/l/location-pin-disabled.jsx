import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xck5rbc3z.css';
import '../../css/m/m5xii2azq.css';
import '../../css/t/t2y0b9lzj.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xck5rbc3z"><path class="m5xii2azq"/><path class="t2y0b9lzj"/></g>`,
		"fallback": "streamline-plump:location-pin-disabled",
	});
}

export default Component;
