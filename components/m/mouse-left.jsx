import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/v099keier.css';
import '../../css/x/xs-nj0bju.css';
import '../../css/r/rg11vsbrt.css';
import '../../css/f/fux-f_bmp.css';
import '../../css/d/d6ek-x1th.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="v099keier"/><path class="xs-nj0bju"/><path class="rg11vsbrt"/><rect transform="matrix(-1 0 0 1 14.31 6.44)" class="fux-f_bmp"/><path class="d6ek-x1th"/></g>`,
		"fallback": "andrsrxn:mouse-left",
	});
}

export default Component;
