import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hkqhezb-a.css';
import '../../css/r/r781fxbff.css';
import '../../css/x/xpvvzbg0g.css';
import '../../css/v/va2chsbro.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="hkqhezb-a"/><path class="r781fxbff"/><path class="xpvvzbg0g"/><path class="va2chsbro"/></g>`,
		"fallback": "streamline-ultimate-color:modern-tv-curvy-edge",
	});
}

export default Component;
