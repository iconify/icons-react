import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dijn8n6ng.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dijn8n6ng"/>`,
		"fallback": "at-icons:list-checkboxes",
	});
}

export default Component;
