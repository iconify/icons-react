import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d0-7q3b-d.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d0-7q3b-d"/>`,
		"fallback": "icon-park-outline:light-rain",
	});
}

export default Component;
