import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/p/pfn07zssj.css';
import '../../css/x/xw9d8bbop.css';
import '../../css/c/cp0l62b-f.css';
import '../../css/z/z8_kn595i.css';
import '../../css/f/fcg6i2y3h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="pfn07zssj"/><path class="wm-k xw9d8bbop"/><path class="cp0l62b-f wm-a"/><path class="wm-k z8_kn595i"/><path class="fcg6i2y3h wm-a"/></g>`,
		"fallback": "withicons:potted-plant-sketch",
	});
}

export default Component;
