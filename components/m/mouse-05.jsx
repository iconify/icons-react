import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/o/otc11ybpz.css';
import '../../css/q/qx4gc400j.css';
import '../../css/f/fr15c8b3o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="otc11ybpz"/><path class="qx4gc400j"/><path class="fr15c8b3o"/></g>`,
		"fallback": "hugeicons:mouse-05",
	});
}

export default Component;
