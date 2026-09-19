import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz7e0qnyt.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nz7e0qnyt"/>`,
		"fallback": "icon-park:one",
	});
}

export default Component;
