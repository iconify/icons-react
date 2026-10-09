import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tp_m7046n.css';
import '../../css/y/y2nhzjrjv.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tp_m7046n"/><path class="y2nhzjrjv"/>`,
		"fallback": "energy-icons:send-20",
	});
}

export default Component;
