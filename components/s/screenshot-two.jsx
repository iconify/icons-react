import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/e/e-otbnbhw.css';
import '../../css/e/eerhrlbkk.css';
import '../../css/z/zhztemb6c.css';
import '../../css/c/ctq9sbb3u.css';
import '../../css/f/fg68m2erv.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="e-otbnbhw"/><path clip-rule="evenodd" class="eerhrlbkk"/><path class="zhztemb6c"/><path clip-rule="evenodd" class="ctq9sbb3u"/><path class="fg68m2erv"/></g>`,
		"fallback": "icon-park-outline:screenshot-two",
	});
}

export default Component;
