import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k1h899aoi.css';
import '../../css/w/w11ykpb4l.css';
import '../../css/q/q8ei_comh.css';
import '../../css/w/wg4j_ojiz.css';
import '../../css/k/khko_1cpb.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k1h899aoi"/><path class="w11ykpb4l"/><path class="q8ei_comh"/><path class="wg4j_ojiz"/><path class="khko_1cpb"/>`,
		"fallback": "devicon:mobx",
	});
}

export default Component;
