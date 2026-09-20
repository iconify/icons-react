import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mtuoe68jq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mtuoe68jq"/>`,
		"fallback": "ri:smartphone-line",
	});
}

export default Component;
