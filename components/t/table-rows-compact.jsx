import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/ptuoxrdjx.css';
import '../../css/i/ie7rkco2c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ptuoxrdjx"/><path class="ie7rkco2c"/></g>`,
		"fallback": "andrsrxn:table-rows-compact",
	});
}

export default Component;
