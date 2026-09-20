import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lhjf_188e.css';
import '../../css/b/b3t0rlnfz.css';
import '../../css/d/d_yf9z9fk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="lhjf_188e"/><path class="b3t0rlnfz"/><path class="d_yf9z9fk"/></g>`,
		"fallback": "streamline-cyber-color:map-direction",
	});
}

export default Component;
