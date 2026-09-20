import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/caufp1b_p.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="caufp1b_p"/>`,
		"fallback": "oui:token-namespace",
	});
}

export default Component;
