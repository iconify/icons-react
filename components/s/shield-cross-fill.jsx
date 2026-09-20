import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a964un1_d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a964un1_d"/>`,
		"fallback": "ri:shield-cross-fill",
	});
}

export default Component;
