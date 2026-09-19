import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/k/kjf-6mb1d.css';
import '../../css/l/lny61nbxl.css';
import '../../css/c/cokx9_blg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="kjf-6mb1d"/><path class="lny61nbxl"/><path class="cokx9_blg"/></g>`,
		"fallback": "hugeicons:share-location-01",
	});
}

export default Component;
