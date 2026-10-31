import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/e/eysevybrd.css';
import '../../css/i/i4jh4i47c.css';
import '../../css/r/rsyrjcc-g.css';
import '../../css/x/xr-g2q37h.css';
import '../../css/g/gnso_qazw.css';
import '../../css/v/vd8ht650l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="eysevybrd wm-shadow"/><path class="i4jh4i47c"/><path class="rsyrjcc-g"/><path class="xr-g2q37h"/><path class="gnso_qazw"/><path class="vd8ht650l"/></g>`,
		"fallback": "withicons-retro:shield-user",
	});
}

export default Component;
