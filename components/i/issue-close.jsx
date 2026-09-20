import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x0gmuvb4d.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="x0gmuvb4d"/>`,
		"fallback": "pajamas:issue-close",
	});
}

export default Component;
