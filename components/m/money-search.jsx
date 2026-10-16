import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a4y4x0zwd.css';
import '../../css/r/r3su53b9v.css';
import '../../css/m/mur8xvbmw.css';
import '../../css/k/kiq0u97uf.css';
import '../../css/h/hjovpdb3p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="a4y4x0zwd"/><path class="r3su53b9v"/><circle class="mur8xvbmw"/><path class="kiq0u97uf"/><path class="hjovpdb3p"/></g>`,
		"fallback": "andrsrxn:money-search",
	});
}

export default Component;
