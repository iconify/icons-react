import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/d/d3nfmxgtj.css';
import '../../css/q/qs19yjd_r.css';
import '../../css/f/f-gpm8wwx.css';
import '../../css/y/ygnnld57d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="d3nfmxgtj"/><path class="qs19yjd_r"/><path class="f-gpm8wwx"/><path class="ygnnld57d"/></g>`,
		"fallback": "solar:star-fall-minimalistic-2-linear",
	});
}

export default Component;
