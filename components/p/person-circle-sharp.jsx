import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ujh6q_bxs.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ujh6q_bxs"/>`,
		"fallback": "famicons:person-circle-sharp",
	});
}

export default Component;
