import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lsxp20g3o.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/w/w_i6ns67x.css';
import '../../css/g/gl47k-but.css';
import '../../css/u/u62xewbdy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lsxp20g3o secondary"/><g class="dt0cm9dhy primary"><path class="w_i6ns67x"/><path class="gl47k-but"/><path class="u62xewbdy"/></g>`,
		"fallback": "iconaut:venus-duo",
	});
}

export default Component;
