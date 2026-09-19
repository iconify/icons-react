import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uf39d-7cx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b uf39d-7cx"/>`,
		"fallback": "boxicons:invert",
	});
}

export default Component;
