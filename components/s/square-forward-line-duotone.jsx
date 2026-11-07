import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/k/kmqbbzs0p.css';
import '../../css/x/xh9ewqbqo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="kmqbbzs0p"/><path class="xh9ewqbqo"/></g>`,
		"fallback": "solar:square-forward-line-duotone",
	});
}

export default Component;
