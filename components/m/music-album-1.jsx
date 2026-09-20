import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dybugtbml.css';
import '../../css/s/sgkrg3bsj.css';
import '../../css/h/hd_nw67sk.css';
import '../../css/g/gp_5yobro.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="dybugtbml"/><path class="sgkrg3bsj"/><path class="hd_nw67sk"/><path class="gp_5yobro"/></g>`,
		"fallback": "streamline-cyber-color:music-album-1",
	});
}

export default Component;
