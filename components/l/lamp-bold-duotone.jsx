import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hvfa4nbjp.css';
import '../../css/u/usggndbfr.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/v/vrpmv5bjw.css';
import '../../css/h/hgqe7ndyk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="hvfa4nbjp"/><path class="usggndbfr"/><g class="mc2zb0bvp"><path class="vrpmv5bjw"/><path class="hgqe7ndyk"/></g></g>`,
		"fallback": "solar:lamp-bold-duotone",
	});
}

export default Component;
