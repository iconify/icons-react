import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nx9gfpabu.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nx9gfpabu"/>`,
		"fallback": "icon-park:theme",
	});
}

export default Component;
