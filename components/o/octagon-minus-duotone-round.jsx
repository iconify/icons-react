import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/uwqrpj9qf.css';
import '../../css/w/wda4_7azv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="uwqrpj9qf"/><path class="wda4_7azv"/></g>`,
		"fallback": "coolicons:octagon-minus-duotone-round",
	});
}

export default Component;
