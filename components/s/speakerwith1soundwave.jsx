import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v7kd4zr2m.css';
import '../../css/g/gc3rb1bxv.css';
import '../../css/r/rortcs8ut.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v7kd4zr2m"/><path class="gc3rb1bxv"/><path class="rortcs8ut"/>`,
		"fallback": "fxemoji:speakerwith1soundwave",
	});
}

export default Component;
