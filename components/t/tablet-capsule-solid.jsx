import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wb0rf9e8q.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wb0rf9e8q"/>`,
		"fallback": "streamline-plump:tablet-capsule-solid",
	});
}

export default Component;
