import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u63n-dshm.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u63n-dshm"/>`,
		"fallback": "teenyicons:tag-outline",
	});
}

export default Component;
