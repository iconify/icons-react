import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oftl5vb9s.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oftl5vb9s"/>`,
		"fallback": "icon-park-outline:system",
	});
}

export default Component;
