import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/isr_8i8ag.css';
import '../../css/t/tp3yspbee.css';
import '../../css/p/phox42bnd.css';
import '../../css/p/p23qiccjb.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="isr_8i8ag"/><path class="tp3yspbee"/><path class="phox42bnd"/><path class="p23qiccjb"/>`,
		"fallback": "energy-icons:mic-off-48-bold",
	});
}

export default Component;
