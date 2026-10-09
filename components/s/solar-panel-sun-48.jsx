import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hb3xjqbob.css';
import '../../css/y/yennaobau.css';
import '../../css/r/rk2pofpji.css';
import '../../css/u/ur75d4b3g.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hb3xjqbob"/><path class="yennaobau"/><path class="rk2pofpji"/><path class="ur75d4b3g"/>`,
		"fallback": "energy-icons:solar-panel-sun-48",
	});
}

export default Component;
