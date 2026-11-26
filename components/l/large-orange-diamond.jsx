import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o33waxbmm.css';
import '../../css/g/g4v3c6bdw.css';
import '../../css/m/mqks4d3ox.css';
import '../../css/x/xwyl7mbbx.css';
import '../../css/z/zo2f20b2m.css';
import '../../css/a/adugmp4ak.css';
import '../../css/k/k3bqh_bud.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><radialGradient id="SVG9owdadSV" cx="76.8" cy="66.9" r="132.3" gradientUnits="userSpaceOnUse"><stop offset="0" class="o33waxbmm"/><stop offset=".85" class="g4v3c6bdw"/><stop offset="1" class="g4v3c6bdw"/></radialGradient></defs><path class="mqks4d3ox"/><path fill="url(#SVG9owdadSV)" transform="matrix(2.8 0 0 2.8 -28.016 -28.016)" class="xwyl7mbbx"/><path class="zo2f20b2m"/><path class="adugmp4ak"/><path class="k3bqh_bud"/>`,
		"fallback": "xero-emoji:large-orange-diamond",
	});
}

export default Component;
