import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/a/a44mazz6d.css';
import '../../css/w/wcvy2luch.css';
import '../../css/s/si_mtzbvj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="a44mazz6d"/><path class="wcvy2luch"/><path class="si_mtzbvj"/></g>`,
		"fallback": "solar:square-double-alt-arrow-down-broken",
	});
}

export default Component;
