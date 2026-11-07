import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/glh9vkb1x.css';
import '../../css/u/u1vdsvbke.css';
import '../../css/k/kp08yd09g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="glh9vkb1x"/><path class="u1vdsvbke"/><path class="kp08yd09g"/>`,
		"fallback": "solar:square-academic-cap-2-bold",
	});
}

export default Component;
