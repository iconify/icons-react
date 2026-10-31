import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pnu8yeb7q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pnu8yeb7q"/>`,
		"fallback": "withicons:search-gloss",
	});
}

export default Component;
