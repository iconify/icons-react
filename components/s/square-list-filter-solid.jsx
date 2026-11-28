import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/doko_h-hn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="doko_h-hn"/>`,
		"fallback": "iconaut:square-list-filter-solid",
	});
}

export default Component;
