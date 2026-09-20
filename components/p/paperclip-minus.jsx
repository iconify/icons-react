import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lx1s_bbyb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lx1s_bbyb"/>`,
		"fallback": "mdi:paperclip-minus",
	});
}

export default Component;
