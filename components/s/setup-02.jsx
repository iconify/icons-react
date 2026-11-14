import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/d/dodotqbmf.css';
import '../../css/q/qi9vo_bij.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="dodotqbmf"/><path class="qi9vo_bij"/></g>`,
		"fallback": "hugeicons:setup-02",
	});
}

export default Component;
