import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n0l7hg_sy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n0l7hg_sy"/>`,
		"fallback": "ri:typhoon-fill",
	});
}

export default Component;
