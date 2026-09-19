import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/y/y3hguvblu.css';
import '../../css/x/xvyy05bje.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="y3hguvblu"/><path class="xvyy05bje"/></g>`,
		"fallback": "hugeicons:medicine-bottle-01",
	});
}

export default Component;
