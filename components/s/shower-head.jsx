import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/c/czxbs2boa.css';
import '../../css/a/a43m-sbcu.css';
import '../../css/t/tqj872bho.css';
import '../../css/h/hi906f52m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGwBvftbNf" x1="7.5" x2="13.5" y1="2.5" y2="21.99" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVGwBvftbNf)" class="czxbs2boa"/><path class="a43m-sbcu wm-a"/><path class="tqj872bho wm-s"/><path class="hi906f52m wm-shine"/></g>`,
		"fallback": "withicons-utsav:shower-head",
	});
}

export default Component;
