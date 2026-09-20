import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/h/holalcxuh.css';
import '../../css/n/nxyeq8w_t.css';
import '../../css/r/r4ng58brp.css';
import '../../css/s/s6e9m8adu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="holalcxuh"/><path class="nxyeq8w_t"/><path class="r4ng58brp"/><path class="s6e9m8adu"/></g>`,
		"fallback": "solar:mask-happly-linear",
	});
}

export default Component;
