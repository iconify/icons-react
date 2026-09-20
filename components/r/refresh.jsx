import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/db7cgxb3d.css';

const viewBox = {"width":24,"height":24,"left":-1.5,"top":-2.5};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="db7cgxb3d"/>`,
		"fallback": "jam:refresh",
	});
}

export default Component;
