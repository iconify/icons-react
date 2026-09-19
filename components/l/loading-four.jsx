import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g-gvyg65x.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g-gvyg65x"/>`,
		"fallback": "icon-park:loading-four",
	});
}

export default Component;
