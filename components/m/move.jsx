import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qvpb7fj5r.css';
import '../../css/r/r32n8pvoq.css';
import '../../css/w/wnn5rsy_n.css';
import '../../css/f/fc7t0_b1z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qvpb7fj5r wm-shadow"/><path class="r32n8pvoq wm-k"/><path class="wm-k wnn5rsy_n"/><path class="fc7t0_b1z wm-k"/>`,
		"fallback": "withicons-pastel:move",
	});
}

export default Component;
