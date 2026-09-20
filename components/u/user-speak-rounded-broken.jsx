import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/o/o_onwfy1m.css';
import '../../css/s/sfxgh6bez.css';
import '../../css/d/d8f9mr75j.css';
import '../../css/o/oomhv1bom.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><circle class="o_onwfy1m"/><path class="sfxgh6bez"/><path class="d8f9mr75j"/><path class="oomhv1bom"/></g>`,
		"fallback": "solar:user-speak-rounded-broken",
	});
}

export default Component;
