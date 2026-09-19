import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wmksmhets.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wmksmhets"/>`,
		"fallback": "icon-park-outline:vertical-tidy-up",
	});
}

export default Component;
