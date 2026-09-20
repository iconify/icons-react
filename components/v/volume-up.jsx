import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/ti7n7f08l.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ti7n7f08l"/>`,
		"fallback": "pajamas:volume-up",
	});
}

export default Component;
