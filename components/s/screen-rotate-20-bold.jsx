import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xrocq5p6r.css';
import '../../css/j/jpsrod_ep.css';
import '../../css/c/cscfetsox.css';
import '../../css/o/o_hd5whvm.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xrocq5p6r"/><path class="jpsrod_ep"/><path class="cscfetsox"/><path class="o_hd5whvm"/>`,
		"fallback": "energy-icons:screen-rotate-20-bold",
	});
}

export default Component;
