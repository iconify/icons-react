import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x_mc4ya_v.css';
import '../../css/z/z56-4sbhg.css';
import '../../css/j/juse7d_jr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wm-a x_mc4ya_v"/><path class="wm-k z56-4sbhg"/><path class="juse7d_jr wm-k"/>`,
		"fallback": "withicons-bauhaus:microphone",
	});
}

export default Component;
