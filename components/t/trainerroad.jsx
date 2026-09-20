import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/puy3aguoq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="puy3aguoq"/>`,
		"fallback": "simple-icons:trainerroad",
	});
}

export default Component;
