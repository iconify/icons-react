import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vc--wpv5i.css';
import '../../css/e/em_er1wga.css';
import '../../css/a/a0pb4zngt.css';
import '../../css/t/t-miabclm.css';
import '../../css/g/g5ig9pcdt.css';
import '../../css/j/jd49wcwdt.css';
import '../../css/w/wzwdjhbve.css';
import '../../css/k/ka0r3sxsx.css';
import '../../css/i/iik4qhbkx.css';
import '../../css/z/z0y--5mue.css';
import '../../css/o/ouaktkbgc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><radialGradient id="SVGCm1U3cWA" cx="80.2" cy="100" r="113.3" gradientUnits="userSpaceOnUse"><stop offset="0" class="vc--wpv5i"/><stop offset=".85" class="em_er1wga"/><stop offset="1" class="em_er1wga"/></radialGradient><radialGradient id="SVGFH7MMeev" cx="75.9" cy="65.6" r="137.6" gradientUnits="userSpaceOnUse"><stop offset="0" class="a0pb4zngt"/><stop offset=".85" class="t-miabclm"/><stop offset="1" class="t-miabclm"/></radialGradient></defs><path class="g5ig9pcdt"/><path fill="url(#SVGCm1U3cWA)" transform="matrix(2.8 0 0 2.8 -21.492 -21.492)" class="jd49wcwdt"/><path class="wzwdjhbve"/><path class="ka0r3sxsx"/><path fill="url(#SVGFH7MMeev)" transform="matrix(2.8 0 0 2.8 -21.492 -21.492)" class="iik4qhbkx"/><path class="z0y--5mue"/><path class="ouaktkbgc"/>`,
		"fallback": "xero-emoji:no-smoking",
	});
}

export default Component;
