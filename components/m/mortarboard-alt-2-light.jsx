import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/j/jpxfn_5zf.css';
import '../../css/u/ubslkqxwm.css';
import '../../css/w/wmfhzdb5y.css';
import '../../css/r/r8i43gbkv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><path class="jpxfn_5zf"/><path class="ubslkqxwm"/><path class="wmfhzdb5y"/><path class="r8i43gbkv"/></g>`,
		"fallback": "lets-icons:mortarboard-alt-2-light",
	});
}

export default Component;
