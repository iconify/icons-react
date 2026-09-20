import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bm60wnq6f.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bm60wnq6f"/>`,
		"fallback": "vaadin:vimeo",
	});
}

export default Component;
