import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/itpgybcop.css';
import '../../css/f/fctcsub_y.css';
import '../../css/t/tnfzrzbpm.css';
import '../../css/b/bti_fwtvh.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="itpgybcop"/><path class="fctcsub_y"/><path class="tnfzrzbpm"/><path class="bti_fwtvh"/></g>`,
		"fallback": "streamline-kameleon-color:oven-glove",
	});
}

export default Component;
