import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rpxw-t44r.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rpxw-t44r"/>`,
		"fallback": "oui:sort-up",
	});
}

export default Component;
