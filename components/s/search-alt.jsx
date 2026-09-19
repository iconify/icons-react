import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dg-y5lb3s.css';

const viewBox = {"width":1200,"height":1200};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dg-y5lb3s"/>`,
		"fallback": "el:search-alt",
	});
}

export default Component;
