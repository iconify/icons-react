import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gid6_9bjm.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gid6_9bjm"/>`,
		"fallback": "memory:menu-up",
	});
}

export default Component;
