import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fls6n_bpt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fls6n_bpt"/>`,
		"fallback": "thesvg-color:mdx",
	});
}

export default Component;
