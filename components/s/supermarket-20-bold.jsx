import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m7xnc1b0i.css';
import '../../css/u/ucg2xpeqq.css';
import '../../css/l/l7hzbkbbx.css';
import '../../css/m/mw2wz86ew.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m7xnc1b0i"/><path class="ucg2xpeqq"/><path class="l7hzbkbbx"/><path class="mw2wz86ew"/>`,
		"fallback": "energy-icons:supermarket-20-bold",
	});
}

export default Component;
