import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nuol2-bbr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nuol2-bbr"/>`,
		"fallback": "simple-icons:twenty",
	});
}

export default Component;
