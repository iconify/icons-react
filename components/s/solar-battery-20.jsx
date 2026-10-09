import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f_c06qbpz.css';
import '../../css/j/jb0sdb0ej.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f_c06qbpz"/><path class="jb0sdb0ej"/>`,
		"fallback": "energy-icons:solar-battery-20",
	});
}

export default Component;
