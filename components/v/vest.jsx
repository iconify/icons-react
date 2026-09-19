import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u4yt2wozj.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u4yt2wozj"/>`,
		"fallback": "icon-park-solid:vest",
	});
}

export default Component;
