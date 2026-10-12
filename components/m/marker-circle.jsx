import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/v64vfdczm.css';
import '../../css/y/ymtmr1bse.css';
import '../../css/p/pzr3zobqx.css';
import '../../css/f/f7ykmeb1s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="v64vfdczm"/><path class="ymtmr1bse"/><path class="pzr3zobqx"/><path class="f7ykmeb1s"/></g>`,
		"fallback": "andrsrxn:marker-circle",
	});
}

export default Component;
