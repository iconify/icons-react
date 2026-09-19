import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fpy7t5tbp.css';
import '../../css/j/j2y13v5ma.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fpy7t5tbp"/><path class="j2y13v5ma"/>`,
		"fallback": "garden:share-fill-16",
	});
}

export default Component;
