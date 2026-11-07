import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dv_i5e0rq.css';
import '../../css/r/rp13nxwka.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="dv_i5e0rq"/><path class="rp13nxwka"/>`,
		"fallback": "solar:tram-bold",
	});
}

export default Component;
