import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/w/wim-ombnw.css';
import '../../css/c/ck2o6mb2h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="wim-ombnw"/><path class="ck2o6mb2h"/></g>`,
		"fallback": "mage:refresh",
	});
}

export default Component;
