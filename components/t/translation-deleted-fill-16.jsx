import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cut4v5iaq.css';
import '../../css/v/vcq9e7hte.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cut4v5iaq"/><path class="vcq9e7hte"/>`,
		"fallback": "garden:translation-deleted-fill-16",
	});
}

export default Component;
