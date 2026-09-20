import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/i/iktc6lbdf.css';
import '../../css/h/hsrvbowyx.css';
import '../../css/r/r1tgwgbzw.css';
import '../../css/e/eq-y86bpl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="iktc6lbdf"/><path class="hsrvbowyx"/><path class="r1tgwgbzw"/><path class="eq-y86bpl"/></g>`,
		"fallback": "solar:shop-minimalistic-line-duotone",
	});
}

export default Component;
