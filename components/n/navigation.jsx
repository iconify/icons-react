import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b4ko2it3e.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b4ko2it3e"/>`,
		"fallback": "icon-park-outline:navigation",
	});
}

export default Component;
