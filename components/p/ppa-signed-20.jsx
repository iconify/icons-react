import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d_dv-4xcr.css';
import '../../css/p/pk2ci7bwz.css';
import '../../css/q/qh3-d7bck.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d_dv-4xcr"/><path class="pk2ci7bwz"/><path class="qh3-d7bck"/>`,
		"fallback": "energy-icons:ppa-signed-20",
	});
}

export default Component;
