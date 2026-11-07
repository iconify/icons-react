import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/glh9vkb1x.css';
import '../../css/k/kp08yd09g.css';
import '../../css/w/wz2bj5btz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="glh9vkb1x"/><path class="kp08yd09g"/><path class="wz2bj5btz"/>`,
		"fallback": "solar:square-academic-cap-2-bold-duotone",
	});
}

export default Component;
