import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wf5j1qb1k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="wf5j1qb1k"/>`,
		"fallback": "reicon:search-plus3",
	});
}

export default Component;
