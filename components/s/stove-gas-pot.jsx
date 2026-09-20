import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kawpu8b5a.css';
import '../../css/f/fewzb0bjr.css';
import '../../css/d/d98anlgyz.css';
import '../../css/h/hl9a5jjgs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="kawpu8b5a"/><path class="fewzb0bjr"/><path class="d98anlgyz"/><path class="hl9a5jjgs"/></g>`,
		"fallback": "streamline-ultimate-color:stove-gas-pot",
	});
}

export default Component;
