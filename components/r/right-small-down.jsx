import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x5exhlb3c.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x5exhlb3c"/>`,
		"fallback": "icon-park-outline:right-small-down",
	});
}

export default Component;
