import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp36uggzh.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gp36uggzh"/>`,
		"fallback": "flat-color-icons:menu",
	});
}

export default Component;
