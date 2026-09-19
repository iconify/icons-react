import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v5vz3hbwc.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v5vz3hbwc"/>`,
		"fallback": "icon-park-outline:sailboat",
	});
}

export default Component;
