import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kc9qa6b_d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kc9qa6b_d"/>`,
		"fallback": "cbi:rooms-nursery",
	});
}

export default Component;
