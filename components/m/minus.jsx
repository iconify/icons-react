import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s6jkanb6i.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s6jkanb6i"/>`,
		"fallback": "icon-park-outline:minus",
	});
}

export default Component;
