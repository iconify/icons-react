import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s0e89qu-d.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s0e89qu-d"/>`,
		"fallback": "oui:table-density-normal",
	});
}

export default Component;
