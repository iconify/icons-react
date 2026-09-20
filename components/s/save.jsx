import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p31jd6bkm.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p31jd6bkm"/>`,
		"fallback": "oui:save",
	});
}

export default Component;
