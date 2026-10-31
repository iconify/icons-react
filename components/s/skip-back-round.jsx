import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kocz6pb7d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kocz6pb7d"/>`,
		"fallback": "coolicons:skip-back-round",
	});
}

export default Component;
