import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nj0nwob6o.css';
import '../../css/d/dake0_b6v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="nj0nwob6o"/><path class="dake0_b6v"/>`,
		"fallback": "circum:mobile-2",
	});
}

export default Component;
