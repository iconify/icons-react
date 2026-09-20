import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/j/jce9lkb-k.css';
import '../../css/n/no9_w2bfc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="jce9lkb-k"/><path class="no9_w2bfc"/></g>`,
		"fallback": "streamline-sharp:leaf",
	});
}

export default Component;
