import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/u/u7mrcgb5f.css';
import '../../css/u/ujn2e1bud.css';
import '../../css/w/wv_civb5p.css';
import '../../css/s/sp_jcmb7x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="u7mrcgb5f"/><path class="ujn2e1bud"/><path class="wv_civb5p"/><path class="sp_jcmb7x"/></g>`,
		"fallback": "solar:streets-navigation-broken",
	});
}

export default Component;
