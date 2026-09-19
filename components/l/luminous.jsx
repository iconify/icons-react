import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1s60ybug.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n1s60ybug"/>`,
		"fallback": "icon-park-outline:luminous",
	});
}

export default Component;
