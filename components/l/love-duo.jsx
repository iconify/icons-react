import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xps_-5liz.css';
import '../../css/t/te12z0bdv.css';
import '../../css/p/p338oh64v.css';
import '../../css/n/ni0citqhu.css';
import '../../css/y/yl94dd9ar.css';
import '../../css/s/suhawis-m.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="xps_-5liz"/><path class="te12z0bdv"/><path class="p338oh64v"/><path class="ni0citqhu"/><path class="yl94dd9ar"/><path clip-rule="evenodd" class="suhawis-m"/></g>`,
		"fallback": "streamline-kameleon-color:love-duo",
	});
}

export default Component;
