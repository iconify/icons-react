import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/st2k-lblj.css';
import '../../css/u/ua9mldbhk.css';
import '../../css/z/zk3eu2imf.css';
import '../../css/i/ie7xf9b1i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect transform="matrix(-.71888 -.69513 .67113 -.74134 9.71 22.8)" class="st2k-lblj"/><path class="ua9mldbhk"/><rect transform="matrix(-.71888 -.69513 .67113 -.74134 10.01 22.7)" class="zk3eu2imf"/><path class="ie7xf9b1i"/></g>`,
		"fallback": "andrsrxn:oven-mitts",
	});
}

export default Component;
