import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zt8xmr7qx.css';
import '../../css/x/x0phmdbxy.css';
import '../../css/q/q1xvjwjtw.css';
import '../../css/b/bzhb1bb1p.css';
import '../../css/d/d-6bc_1zz.css';
import '../../css/p/p-xkkkv7c.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<linearGradient id="SVGE8ztDdjy" x1="112.03" x2="115.687" y1="537.05" y2="533.393" gradientTransform="matrix(120 0 0 -140 -13407 75187)" gradientUnits="userSpaceOnUse"><stop offset="0" class="zt8xmr7qx"/><stop offset="1" class="x0phmdbxy"/></linearGradient><path fill="url(#SVGE8ztDdjy)" class="q1xvjwjtw"/><path class="bzhb1bb1p"/><path class="d-6bc_1zz"/><circle class="p-xkkkv7c"/>`,
		"fallback": "selfhst:notediscovery",
	});
}

export default Component;
