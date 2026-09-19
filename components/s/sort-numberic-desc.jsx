import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lmelp6kaw.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lmelp6kaw"/>`,
		"fallback": "icomoon-free:sort-numberic-desc",
	});
}

export default Component;
