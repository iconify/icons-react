import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuhib-bsq.css';
import '../../css/s/srw89g_hc.css';
import '../../css/d/deelbpbhg.css';
import '../../css/f/f6law37ty.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cuhib-bsq"/><path class="srw89g_hc"/><path class="deelbpbhg"/><path class="f6law37ty"/>`,
		"fallback": "energy-icons:roof-20",
	});
}

export default Component;
