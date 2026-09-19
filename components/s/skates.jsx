import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jzo2gzbxl.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jzo2gzbxl"/>`,
		"fallback": "icon-park-outline:skates",
	});
}

export default Component;
