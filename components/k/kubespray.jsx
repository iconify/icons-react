import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ey9koeo-v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ey9koeo-v"/>`,
		"fallback": "thesvg-color:kubespray",
	});
}

export default Component;
