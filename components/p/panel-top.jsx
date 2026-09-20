import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jjad2qpef.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jjad2qpef"/>`,
		"fallback": "system-uicons:panel-top",
	});
}

export default Component;
