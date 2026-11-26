import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vc--wpv5i.css';
import '../../css/t/tvy-jp_gd.css';
import '../../css/o/o25oc-b_j.css';
import '../../css/j/jesj8_bwh.css';
import '../../css/n/nr9hpq31i.css';
import '../../css/g/g2kr__w7r.css';
import '../../css/e/ej6x75btz.css';
import '../../css/e/e2xaa-b9x.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><radialGradient id="SVG9HCiyeSU" cx=".35" cy=".3" r=".8"><stop offset="0" class="vc--wpv5i"/><stop offset=".55" class="tvy-jp_gd"/><stop offset="1" class="o25oc-b_j"/></radialGradient></defs><path class="jesj8_bwh"/><path fill="url(#SVG9HCiyeSU)" transform="translate(-12.994 -33.21)scale(2.65)" class="nr9hpq31i"/><path class="g2kr__w7r"/><path class="ej6x75btz"/><path class="e2xaa-b9x"/>`,
		"fallback": "xero-emoji:tooth",
	});
}

export default Component;
