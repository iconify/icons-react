import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mf5y5ccyn.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mf5y5ccyn"/>`,
		"fallback": "garden:translation-deleted-stroke-16",
	});
}

export default Component;
