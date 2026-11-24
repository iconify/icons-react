import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sqpt0ub4e.css';
import '../../css/h/hpyrhjbtm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sqpt0ub4e"/><path class="hpyrhjbtm"/>`,
		"fallback": "lucide-extended:layer-arrow-down-filled",
	});
}

export default Component;
