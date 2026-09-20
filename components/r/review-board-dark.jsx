import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u9vm1jp9x.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u9vm1jp9x"/>`,
		"fallback": "selfhst:review-board-dark",
	});
}

export default Component;
