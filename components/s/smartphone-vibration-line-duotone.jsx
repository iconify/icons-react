import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/b/b-bymobfb.css';
import '../../css/i/iwzbdbrcw.css';
import '../../css/n/n3q86lp2t.css';
import '../../css/j/jm518nbhy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="b-bymobfb"/><path class="iwzbdbrcw"/><path class="n3q86lp2t"/><path class="jm518nbhy"/></g>`,
		"fallback": "solar:smartphone-vibration-line-duotone",
	});
}

export default Component;
