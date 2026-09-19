import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/p/p9-zrkb4g.css';
import '../../css/c/cmb79xb_o.css';
import '../../css/f/f8wb16b6j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="p9-zrkb4g"/><path class="cmb79xb_o"/><path class="f8wb16b6j"/></g>`,
		"fallback": "iconoir:one-point-circle",
	});
}

export default Component;
