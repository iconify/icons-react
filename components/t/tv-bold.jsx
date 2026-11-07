import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/duz33rb7u.css';
import '../../css/l/l2_ygdb_e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="duz33rb7u"/><path class="l2_ygdb_e"/>`,
		"fallback": "solar:tv-bold",
	});
}

export default Component;
