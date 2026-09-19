import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bxjb7dbpq.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bxjb7dbpq"/>`,
		"fallback": "bi:medium",
	});
}

export default Component;
