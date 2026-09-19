import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/u/uf8-wnb5o.css';
import '../../css/w/wtufaibos.css';
import '../../css/k/kcu_1wohp.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><circle class="uf8-wnb5o"/><circle class="wtufaibos"/><path class="kcu_1wohp"/></g>`,
		"fallback": "garden:user-circle-stroke-12",
	});
}

export default Component;
