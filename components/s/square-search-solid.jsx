import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cg6quqbog.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cg6quqbog"/>`,
		"fallback": "iconaut:square-search-solid",
	});
}

export default Component;
