import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/u/ujytykb9p.css';
import '../../css/m/mpl4fnmol.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="ujytykb9p"/><path class="mpl4fnmol"/></g>`,
		"fallback": "hugeicons:store-verified-01",
	});
}

export default Component;
