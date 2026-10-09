import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cj0zxfb_c.css';
import '../../css/c/c56u3549k.css';
import '../../css/l/lge81q-cq.css';
import '../../css/j/jsghbdbsn.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cj0zxfb_c"/><path class="c56u3549k"/><path class="lge81q-cq"/><path class="jsghbdbsn"/>`,
		"fallback": "energy-icons:portable-solar-48",
	});
}

export default Component;
