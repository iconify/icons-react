import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uib9zes4d.css';
import '../../css/y/yml2ess9o.css';
import '../../css/i/iemni-bzi.css';
import '../../css/v/v1yw6abmm.css';
import '../../css/x/xcrpfozkb.css';
import '../../css/p/pwmj0sbci.css';
import '../../css/k/k79_4jbyq.css';
import '../../css/o/oh2gtttpl.css';
import '../../css/z/ze4qczd_q.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><linearGradient id="SVGaJKTiKBL" x1="4.217" x2="62.921" y1="60.019" y2="1.313" gradientTransform="translate(.002 46.163)scale(.45597)" gradientUnits="userSpaceOnUse"><stop offset=".29" class="uib9zes4d"/><stop offset=".75" class="yml2ess9o"/></linearGradient><linearGradient id="SVGAYYEEdKx" x1="-.723" x2="24.14" y1="7.624" y2="61.249" gradientTransform="translate(.002 46.163)scale(.45597)" gradientUnits="userSpaceOnUse"><stop offset=".29" class="iemni-bzi"/><stop offset=".56" class="uib9zes4d"/></linearGradient></defs><path clip-rule="evenodd" class="v1yw6abmm"/><path fill="url(#SVGaJKTiKBL)" class="xcrpfozkb"/><path fill="url(#SVGAYYEEdKx)" class="pwmj0sbci"/><path class="k79_4jbyq"/><path class="oh2gtttpl"/><path clip-rule="evenodd" class="ze4qczd_q"/>`,
		"fallback": "devicon:rubymine-wordmark",
	});
}

export default Component;
