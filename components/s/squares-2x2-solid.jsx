import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fzqs9yb1h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fzqs9yb1h"/>`,
		"fallback": "nrk:squares-2x2-solid",
	});
}

export default Component;
