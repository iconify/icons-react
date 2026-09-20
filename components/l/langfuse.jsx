import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/swgykjbfw.css';
import '../../css/z/z_9dnnd4s.css';
import '../../css/f/fc28b1b8r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="swgykjbfw"/><path class="z_9dnnd4s"/><path class="fc28b1b8r"/>`,
		"fallback": "thesvg-color:langfuse",
	});
}

export default Component;
