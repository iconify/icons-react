import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xz6k66c-q.css';
import '../../css/r/rkadl_r6j.css';
import '../../css/t/tcaouzbll.css';
import '../../css/m/meg5fm1wc.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xz6k66c-q"/><path class="rkadl_r6j"/><path class="tcaouzbll"/><path class="meg5fm1wc"/>`,
		"fallback": "energy-icons:weather-vane-20-bold",
	});
}

export default Component;
