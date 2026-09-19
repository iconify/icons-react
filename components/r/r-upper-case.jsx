import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u-ixh8fnt.css';

const viewBox = {"width":471,"height":735};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u-ixh8fnt"/>`,
		"fallback": "ls:r-upper-case",
	});
}

export default Component;
