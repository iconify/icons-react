import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/byqln0j1r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="byqln0j1r"/>`,
		"fallback": "iconaut:square-sigma-solid",
	});
}

export default Component;
