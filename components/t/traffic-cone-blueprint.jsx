import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/p/p5cknqbql.css';
import '../../css/q/qr4e8fbrr.css';
import '../../css/h/hl0_bw20q.css';
import '../../css/j/jzl_cf7kn.css';
import '../../css/o/oltgd75vl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="p5cknqbql wm-deco"/><path class="qr4e8fbrr wm-deco"/><path class="hl0_bw20q wm-deco"/><path class="jzl_cf7kn wm-k"/><path class="oltgd75vl wm-a"/></g>`,
		"fallback": "withicons:traffic-cone-blueprint",
	});
}

export default Component;
