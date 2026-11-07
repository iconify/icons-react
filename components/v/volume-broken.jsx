import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hqum4actq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hqum4actq"/>`,
		"fallback": "solar:volume-broken",
	});
}

export default Component;
