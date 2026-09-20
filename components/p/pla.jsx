import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x82e92b6s.css';
import '../../css/u/ubp77pb_r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x82e92b6s"/><path class="ubp77pb_r"/>`,
		"fallback": "token:pla",
	});
}

export default Component;
