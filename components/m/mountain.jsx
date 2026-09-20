import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wui9vd-9u.css';

const viewBox = {"width":24,"height":24,"left":-2,"top":-3};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wui9vd-9u"/>`,
		"fallback": "jam:mountain",
	});
}

export default Component;
