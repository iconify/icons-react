import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kc1ytd_oy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="kc1ytd_oy"/>`,
		"fallback": "si:lock-fill",
	});
}

export default Component;
