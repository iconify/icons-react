import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vm3ivccum.css';
import '../../css/h/hwl4e0bhl.css';
import '../../css/n/nzqwv94kx.css';
import '../../css/s/sdbl3ttsf.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="vm3ivccum"><path class="hwl4e0bhl"/><path class="nzqwv94kx"/><path class="sdbl3ttsf"/></g>`,
		"fallback": "icon-park-outline:security-stall",
	});
}

export default Component;
