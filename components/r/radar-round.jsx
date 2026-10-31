import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lc_wdvbdz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lc_wdvbdz"/>`,
		"fallback": "coolicons:radar-round",
	});
}

export default Component;
