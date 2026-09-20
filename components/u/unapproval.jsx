import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jw9ueq_3z.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="jw9ueq_3z"/>`,
		"fallback": "pajamas:unapproval",
	});
}

export default Component;
