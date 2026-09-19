import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yf4cwib3j.css';
import '../../css/n/nsk1yu6-x.css';
import '../../css/h/hrhxeryyq.css';
import '../../css/f/f06t_wbso.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yf4cwib3j"/><path class="nsk1yu6-x"/><path class="hrhxeryyq"/><path class="f06t_wbso"/>`,
		"fallback": "fxemoji:mouse",
	});
}

export default Component;
