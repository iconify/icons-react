import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nqh9pub3q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nqh9pub3q"/>`,
		"fallback": "coolicons:plane-landing-side-fill-round",
	});
}

export default Component;
