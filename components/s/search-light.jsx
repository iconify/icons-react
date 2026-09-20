import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/a/ajlilwgdm.css';
import '../../css/m/mvo2n9bru.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><circle class="ajlilwgdm"/><path class="mvo2n9bru"/></g>`,
		"fallback": "lets-icons:search-light",
	});
}

export default Component;
