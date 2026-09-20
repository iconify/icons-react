import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k83_4x1-c.css';
import '../../css/d/d-llkv2cb.css';
import '../../css/i/itrz8idgc.css';
import '../../css/u/uzd0xub_o.css';
import '../../css/c/cj4-q0pbi.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k83_4x1-c"/><linearGradient id="SVGgvJg9bTS" x1="149.045" x2="262.637" y1="63.893" y2="260.639" gradientUnits="userSpaceOnUse"><stop offset="0" class="d-llkv2cb"/><stop offset="1" class="itrz8idgc"/></linearGradient><path fill="url(#SVGgvJg9bTS)" class="uzd0xub_o"/><linearGradient id="SVGEP5I9bhs" x1="288.325" x2="435.052" y1="258.2" y2="467.748" gradientUnits="userSpaceOnUse"><stop offset="0" class="d-llkv2cb"/><stop offset="1" class="itrz8idgc"/></linearGradient><path fill="url(#SVGEP5I9bhs)" class="cj4-q0pbi"/>`,
		"fallback": "selfhst:shodan-light",
	});
}

export default Component;
