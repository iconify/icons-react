import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/ha-2i6-rt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ha-2i6-rt"/>`,
		"fallback": "solar:sim-card-minimalistic-bold",
	});
}

export default Component;
