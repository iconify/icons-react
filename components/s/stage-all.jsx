import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e5daksowh.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="e5daksowh"/>`,
		"fallback": "pajamas:stage-all",
	});
}

export default Component;
