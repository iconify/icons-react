import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k3xlhhvzq.css';
import '../../css/n/n40ccgk9s.css';
import '../../css/f/fv0ncobfc.css';
import '../../css/u/upy568bmd.css';
import '../../css/h/h2qjm-b-q.css';
import '../../css/y/y9uambmbt.css';
import '../../css/q/qcu413b0y.css';
import '../../css/x/x21lysbjw.css';
import '../../css/t/twfuabb7e.css';
import '../../css/p/psz63mbwp.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<linearGradient id="SVGxPWimdiY" x1="96.306" x2="25.454" y1="35.144" y2="98.431" gradientTransform="matrix(1 0 0 -1 0 128)" gradientUnits="userSpaceOnUse"><stop offset="0" class="k3xlhhvzq"/><stop offset="1" class="n40ccgk9s"/></linearGradient><path fill="url(#SVGxPWimdiY)" clip-rule="evenodd" class="fv0ncobfc"/><linearGradient id="SVGEdQI3gkp" x1="25.336" x2="94.569" y1="98.33" y2="36.847" gradientTransform="matrix(1 0 0 -1 0 128)" gradientUnits="userSpaceOnUse"><stop offset="0" class="upy568bmd"/><stop offset=".169" class="h2qjm-b-q"/><stop offset=".445" class="y9uambmbt"/><stop offset=".79" class="qcu413b0y"/><stop offset="1"/></linearGradient><path fill="url(#SVGEdQI3gkp)" clip-rule="evenodd" class="x21lysbjw"/><path clip-rule="evenodd" class="twfuabb7e"/><path clip-rule="evenodd" class="psz63mbwp"/>`,
		"fallback": "devicon:powershell",
	});
}

export default Component;
