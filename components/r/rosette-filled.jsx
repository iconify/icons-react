import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mla-y_s5u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mla-y_s5u"/>`,
		"fallback": "tabler:rosette-filled",
	});
}

export default Component;
