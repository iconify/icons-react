import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h68vtmp3n.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h68vtmp3n"/>`,
		"fallback": "memory:toggle-switch-off",
	});
}

export default Component;
