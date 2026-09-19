import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jocuf1b7s.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jocuf1b7s"/>`,
		"fallback": "icon-park:like",
	});
}

export default Component;
