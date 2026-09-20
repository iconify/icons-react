import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jkzcylb3u.css';
import '../../css/m/mmtc1hr0r.css';
import '../../css/u/u24fbtb3s.css';
import '../../css/p/p40v0gbuu.css';
import '../../css/e/eox5sonav.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="jkzcylb3u"/><circle class="mmtc1hr0r"/><circle class="u24fbtb3s"/><path class="p40v0gbuu"/><circle class="eox5sonav"/></g>`,
		"fallback": "majesticons:map-marker-path-line",
	});
}

export default Component;
