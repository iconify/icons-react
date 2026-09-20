import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/z/zai46_5_k.css';
import '../../css/w/w2zwy2xpv.css';
import '../../css/i/ic0mqdbzm.css';
import '../../css/v/v0nuqkbfc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="zai46_5_k"/><path class="w2zwy2xpv"/><path class="ic0mqdbzm"/><path class="v0nuqkbfc"/></g>`,
		"fallback": "streamline-sharp-color:school-bus-side",
	});
}

export default Component;
