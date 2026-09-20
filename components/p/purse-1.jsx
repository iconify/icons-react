import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/imqrq0bre.css';
import '../../css/v/vdlp-abyu.css';
import '../../css/u/u1bhpm2uu.css';
import '../../css/v/vxiaubcry.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="imqrq0bre"/><path class="vdlp-abyu"/><path class="u1bhpm2uu"/><path class="vxiaubcry"/></g>`,
		"fallback": "streamline-cyber-color:purse-1",
	});
}

export default Component;
