import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/q/qb5-6h9_c.css';
import '../../css/o/or5i1hbnx.css';
import '../../css/u/uopp_bbmh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="qb5-6h9_c"/><path class="or5i1hbnx"/><path class="uopp_bbmh"/></g>`,
		"fallback": "streamline-sharp:ribbon",
	});
}

export default Component;
