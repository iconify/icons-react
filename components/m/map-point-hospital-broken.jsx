import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/m/m_f5uw_8g.css';
import '../../css/a/aewalzb3w.css';
import '../../css/m/mrov9tb8p.css';
import '../../css/p/p9u0eeb3j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><circle class="m_f5uw_8g"/><path class="aewalzb3w"/><path class="mrov9tb8p"/><path class="p9u0eeb3j"/></g>`,
		"fallback": "solar:map-point-hospital-broken",
	});
}

export default Component;
