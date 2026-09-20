import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j5d93d0jn.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="j5d93d0jn"/>`,
		"fallback": "ix:jigsaw-details",
	});
}

export default Component;
