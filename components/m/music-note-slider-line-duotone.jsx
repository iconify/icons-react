import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/m/m9lr-xbek.css';
import '../../css/f/f2-h4iwhz.css';
import '../../css/f/fyzcgb-je.css';
import '../../css/u/urw2-mb8r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="m9lr-xbek"/><path class="f2-h4iwhz"/><path class="fyzcgb-je"/><path class="urw2-mb8r"/></g>`,
		"fallback": "solar:music-note-slider-line-duotone",
	});
}

export default Component;
