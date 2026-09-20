import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bd3tmjb6z.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bd3tmjb6z"/>`,
		"fallback": "medical-icon:restrooms",
	});
}

export default Component;
