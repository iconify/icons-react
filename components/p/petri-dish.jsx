import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/w/wqo-b0b3n.css';
import '../../css/k/k4gw3ubak.css';
import '../../css/a/adyd0rt8l.css';
import '../../css/m/mw9sf0bjj.css';
import '../../css/d/dp7zxik9k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="wqo-b0b3n"/><path class="k4gw3ubak"/><path class="adyd0rt8l"/><path class="mw9sf0bjj"/><path class="dp7zxik9k"/></g>`,
		"fallback": "matita:petri-dish",
	});
}

export default Component;
