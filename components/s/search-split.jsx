import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jgcj8jl2x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jgcj8jl2x"/>`,
		"fallback": "stash:search-split",
	});
}

export default Component;
