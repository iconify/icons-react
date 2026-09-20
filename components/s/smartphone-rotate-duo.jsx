import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fvfectegd.css';
import '../../css/y/yvv-88hnl.css';
import '../../css/h/hkd2llbml.css';
import '../../css/w/wq-t_3i_z.css';
import '../../css/r/rc0swhbwk.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="fvfectegd"/><path class="yvv-88hnl"/><path class="hkd2llbml"/><path class="wq-t_3i_z"/><path class="rc0swhbwk"/></g>`,
		"fallback": "streamline-kameleon-color:smartphone-rotate-duo",
	});
}

export default Component;
