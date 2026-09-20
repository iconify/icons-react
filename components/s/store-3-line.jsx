import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/szw_e6b1r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="szw_e6b1r"/>`,
		"fallback": "ri:store-3-line",
	});
}

export default Component;
