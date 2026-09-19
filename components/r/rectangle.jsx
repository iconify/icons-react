import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2ok4bcnk.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d2ok4bcnk"/>`,
		"fallback": "icon-park-solid:rectangle",
	});
}

export default Component;
