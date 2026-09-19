import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wcw41v1xo.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wcw41v1xo"/>`,
		"fallback": "fluent-mdl2:view-list-tree",
	});
}

export default Component;
