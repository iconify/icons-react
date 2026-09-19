import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/i/i9h5kyu-u.css';
import '../../css/k/k77ak7bhv.css';
import '../../css/k/kyhrmps2k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="i9h5kyu-u"/><path class="k77ak7bhv"/><path class="kyhrmps2k"/></g>`,
		"fallback": "hugeicons:presentation-05",
	});
}

export default Component;
