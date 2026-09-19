import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xar2vs8av.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xar2vs8av"/>`,
		"fallback": "icon-park-outline:point-out",
	});
}

export default Component;
