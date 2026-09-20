import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/flrk_ibxq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="flrk_ibxq"/>`,
		"fallback": "ri:javascript-fill",
	});
}

export default Component;
