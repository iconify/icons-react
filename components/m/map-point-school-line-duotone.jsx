import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/o/o4aqkhbqi.css';
import '../../css/k/kmdcknbod.css';
import '../../css/t/toskudjye.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="o4aqkhbqi"/><path class="kmdcknbod"/><path class="toskudjye"/></g>`,
		"fallback": "solar:map-point-school-line-duotone",
	});
}

export default Component;
