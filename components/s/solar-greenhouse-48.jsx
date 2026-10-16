import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qgzdi_vdo.css';
import '../../css/l/ll2igp43q.css';
import '../../css/k/kbt7z1_ku.css';
import '../../css/b/bxvsbvbrm.css';
import '../../css/f/f2pwcorxy.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qgzdi_vdo"/><path class="ll2igp43q"/><path class="kbt7z1_ku"/><path class="bxvsbvbrm"/><path class="f2pwcorxy"/>`,
		"fallback": "energy-icons:solar-greenhouse-48",
	});
}

export default Component;
