import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lwwg9_gwj.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lwwg9_gwj"/>`,
		"fallback": "pajamas:terraform",
	});
}

export default Component;
