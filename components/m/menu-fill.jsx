import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hzd-2m8yc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hzd-2m8yc"/>`,
		"fallback": "ri:menu-fill",
	});
}

export default Component;
