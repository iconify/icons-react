import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/u/u2ffjhxgz.css';
import '../../css/b/bgh9y3bsn.css';
import '../../css/l/lsle5sbqv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><circle class="u2ffjhxgz"/><path class="bgh9y3bsn"/><path class="lsle5sbqv"/></g>`,
		"fallback": "hugeicons:lock-keyhole-open",
	});
}

export default Component;
