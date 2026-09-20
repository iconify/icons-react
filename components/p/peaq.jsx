import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yvbt431ec.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yvbt431ec"/>`,
		"fallback": "token:peaq",
	});
}

export default Component;
