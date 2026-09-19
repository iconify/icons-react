import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fr3rnzvyj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fr3rnzvyj"/>`,
		"fallback": "hugeicons:paint-brush-01",
	});
}

export default Component;
