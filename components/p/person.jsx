import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p4iwixnnn.css';

const viewBox = {"width":320,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p4iwixnnn"/>`,
		"fallback": "fa6-solid:person",
	});
}

export default Component;
