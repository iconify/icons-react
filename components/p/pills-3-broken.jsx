import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/t/tmsthrbjy.css';
import '../../css/c/cns6ly1bg.css';
import '../../css/p/pqsrmgrdx.css';
import '../../css/h/hqsaabc6g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="tmsthrbjy"/><path class="cns6ly1bg"/><path class="pqsrmgrdx"/><path class="hqsaabc6g"/></g>`,
		"fallback": "solar:pills-3-broken",
	});
}

export default Component;
