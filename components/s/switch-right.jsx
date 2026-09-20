import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dez0gpbpx.css';

const viewBox = {"width":24,"height":24,"left":-2,"top":-5};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dez0gpbpx"/>`,
		"fallback": "jam:switch-right",
	});
}

export default Component;
