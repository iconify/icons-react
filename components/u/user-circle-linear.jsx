import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/l/lcfnqzkei.css';
import '../../css/s/shu3xdl9q.css';
import '../../css/g/gx2slmrgi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><circle class="lcfnqzkei"/><circle class="shu3xdl9q"/><path class="gx2slmrgi"/></g>`,
		"fallback": "solar:user-circle-linear",
	});
}

export default Component;
