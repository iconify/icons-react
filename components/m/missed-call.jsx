import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/t/tl630ob_w.css';
import '../../css/x/xgn-kpbzm.css';
import '../../css/w/we99ml1ux.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="tl630ob_w"/><path class="xgn-kpbzm"/><path class="we99ml1ux"/></g>`,
		"fallback": "streamline-sharp:missed-call",
	});
}

export default Component;
