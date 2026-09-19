import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qjk99yo8i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qjk99yo8i"/>`,
		"fallback": "hugeicons:soundcloud",
	});
}

export default Component;
