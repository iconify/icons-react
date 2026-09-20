import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/l/lk387obkc.css';
import '../../css/p/pek1alrpa.css';
import '../../css/e/eysntvwok.css';
import '../../css/o/obbks8bmv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><circle class="lk387obkc"/><path class="pek1alrpa"/><path class="eysntvwok"/><path class="obbks8bmv"/></g>`,
		"fallback": "solar:running-linear",
	});
}

export default Component;
