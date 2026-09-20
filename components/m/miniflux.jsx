import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jq_-nnb9e.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jq_-nnb9e"/>`,
		"fallback": "selfhst:miniflux",
	});
}

export default Component;
