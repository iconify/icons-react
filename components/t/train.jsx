import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/j/jl9jk90kn.css';
import '../../css/t/trp5uzb_n.css';
import '../../css/i/i-2lwccfg.css';
import '../../css/t/txyn3ts-g.css';
import '../../css/j/je6-qtb7r.css';
import '../../css/l/l703mcccm.css';
import '../../css/m/mez_iqb_l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="jl9jk90kn"/><path class="trp5uzb_n"/><path class="i-2lwccfg"/><path class="txyn3ts-g"/><path class="je6-qtb7r"/><path class="l703mcccm"/><path class="mez_iqb_l"/></g>`,
		"fallback": "iconaut:train",
	});
}

export default Component;
