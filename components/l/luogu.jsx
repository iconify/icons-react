import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eva_pbbet.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eva_pbbet"/>`,
		"fallback": "simple-icons:luogu",
	});
}

export default Component;
