import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m-8qfob8m.css';
import '../../css/u/ugq9c9psw.css';
import '../../css/y/y9-74baer.css';
import '../../css/m/mqh_dfe5t.css';
import '../../css/u/u92jb-p1p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="m-8qfob8m"/><path class="ugq9c9psw"/><path class="y9-74baer"/><path class="mqh_dfe5t"/><path class="u92jb-p1p"/></g>`,
		"fallback": "streamline-cyber-color:police-car-1",
	});
}

export default Component;
