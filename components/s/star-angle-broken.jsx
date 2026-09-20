import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/v/vcsrxbc2o.css';
import '../../css/r/ruikyfbmv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="vcsrxbc2o"/><path class="ruikyfbmv"/></g>`,
		"fallback": "solar:star-angle-broken",
	});
}

export default Component;
