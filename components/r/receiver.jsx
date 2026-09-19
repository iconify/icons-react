import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/t/tg8q-jnqi.css';
import '../../css/v/vw4sa1bni.css';
import '../../css/l/lw384qbrb.css';
import '../../css/n/ndbexpdcv.css';
import '../../css/m/mtvr2mb4j.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="tg8q-jnqi"/><path class="vw4sa1bni"/><path class="lw384qbrb"/><path class="ndbexpdcv"/><path class="mtvr2mb4j"/></g>`,
		"fallback": "icon-park:receiver",
	});
}

export default Component;
