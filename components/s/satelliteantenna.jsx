import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e4e9wxbzp.css';
import '../../css/w/wb-n_4bzs.css';
import '../../css/y/yykougbct.css';
import '../../css/s/sawph8aiv.css';
import '../../css/t/t-vpdhb4l.css';
import '../../css/q/q0r5gac2g.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e4e9wxbzp"/><path class="wb-n_4bzs"/><path class="yykougbct"/><path class="sawph8aiv"/><path class="t-vpdhb4l"/><path class="q0r5gac2g"/>`,
		"fallback": "fxemoji:satelliteantenna",
	});
}

export default Component;
