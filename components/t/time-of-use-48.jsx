import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xm295izdf.css';
import '../../css/f/faw5_bbxe.css';
import '../../css/l/lkg0w6bmm.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xm295izdf"/><path class="faw5_bbxe"/><path class="lkg0w6bmm"/>`,
		"fallback": "energy-icons:time-of-use-48",
	});
}

export default Component;
