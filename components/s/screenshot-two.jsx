import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/e/e-otbnbhw.css';
import '../../css/h/he0xa1h2l.css';
import '../../css/z/zhztemb6c.css';
import '../../css/f/f3o492b8p.css';
import '../../css/f/fg68m2erv.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="e-otbnbhw"/><path clip-rule="evenodd" class="he0xa1h2l"/><path class="zhztemb6c"/><path clip-rule="evenodd" class="f3o492b8p"/><path class="fg68m2erv"/></g>`,
		"fallback": "icon-park-solid:screenshot-two",
	});
}

export default Component;
