import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/arpdxundl.css';
import '../../css/v/vjpy2cy5v.css';
import '../../css/w/wyn0zpbfa.css';
import '../../css/t/tc97r04gw.css';
import '../../css/c/c5jyy0btl.css';
import '../../css/q/qe9a1cczb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="arpdxundl"/><path class="vjpy2cy5v"/><path class="wyn0zpbfa"/><path class="tc97r04gw"/><path class="c5jyy0btl"/><path class="qe9a1cczb"/></g>`,
		"fallback": "streamline-cyber-color:paint-palette",
	});
}

export default Component;
