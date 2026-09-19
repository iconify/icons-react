import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vm3ivccum.css';
import '../../css/k/k793wwqlu.css';
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
		"content": `<g class="vm3ivccum"><path class="k793wwqlu"/><path class="nzqwv94kx"/><path class="sdbl3ttsf"/></g>`,
		"fallback": "icon-park-solid:security-stall",
	});
}

export default Component;
