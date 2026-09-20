import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hig_nhbgi.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hig_nhbgi"/>`,
		"fallback": "selfhst:nyt-sudoku-light",
	});
}

export default Component;
