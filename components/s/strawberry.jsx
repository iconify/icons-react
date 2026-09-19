import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/esom1xbsj.css';

const viewBox = {"width":1025,"height":961};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="esom1xbsj"/>`,
		"fallback": "whh:strawberry",
	});
}

export default Component;
