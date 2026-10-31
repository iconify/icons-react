import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/i2fx_ebhl.css';
import '../../css/h/hzjx6ibud.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="i2fx_ebhl"/><path class="hzjx6ibud"/></g>`,
		"fallback": "coolicons:puzzle-duotone-round",
	});
}

export default Component;
