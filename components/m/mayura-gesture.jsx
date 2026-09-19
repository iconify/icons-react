import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/c/cot52idcv.css';
import '../../css/l/lxvu1ubkk.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="cot52idcv"/><path class="lxvu1ubkk"/></g>`,
		"fallback": "icon-park-outline:mayura-gesture",
	});
}

export default Component;
