import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qhe79hh6c.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qhe79hh6c"/>`,
		"fallback": "icon-park-outline:right",
	});
}

export default Component;
