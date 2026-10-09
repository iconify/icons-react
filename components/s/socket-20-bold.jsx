import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/we2agujqc.css';
import '../../css/d/dy9z_lboh.css';
import '../../css/p/pg9b_zw-q.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="we2agujqc"/><path class="dy9z_lboh"/><path class="pg9b_zw-q"/>`,
		"fallback": "energy-icons:socket-20-bold",
	});
}

export default Component;
