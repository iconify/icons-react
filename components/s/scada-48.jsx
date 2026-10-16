import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xszfmab4u.css';
import '../../css/h/hutzz7vvf.css';
import '../../css/d/d_7n5kb3o.css';
import '../../css/u/u-6rxwbts.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xszfmab4u"/><path class="hutzz7vvf"/><path class="d_7n5kb3o"/><path class="u-6rxwbts"/>`,
		"fallback": "energy-icons:scada-48",
	});
}

export default Component;
