import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3hjlsbmw.css';
import '../../css/w/wt1vqqboi.css';
import '../../css/l/l0umolbjg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="l3hjlsbmw"/><path class="wt1vqqboi"/><path class="l0umolbjg"/>`,
		"fallback": "solar:projector-bold-duotone",
	});
}

export default Component;
