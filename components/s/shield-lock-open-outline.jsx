import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sio0q-bpj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sio0q-bpj"/>`,
		"fallback": "mdi:shield-lock-open-outline",
	});
}

export default Component;
