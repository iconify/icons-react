import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/l/lmrq91btd.css';
import '../../css/m/m9z8i1rfw.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><rect class="lmrq91btd"/><path class="m9z8i1rfw"/></g>`,
		"fallback": "streamline:travel-hotel-bed-1-bed-single-bedrooms-bedroom-hotel",
	});
}

export default Component;
