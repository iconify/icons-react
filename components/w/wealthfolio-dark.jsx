import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fyb-cgbbu.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fyb-cgbbu"/>`,
		"fallback": "selfhst:wealthfolio-dark",
	});
}

export default Component;
