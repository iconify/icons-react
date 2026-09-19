import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/szgw_9b9g.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="szgw_9b9g"/>`,
		"fallback": "bi:skip-end",
	});
}

export default Component;
