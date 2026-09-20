import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mk_k-5bjk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mk_k-5bjk"/>`,
		"fallback": "lets-icons:send-hor",
	});
}

export default Component;
