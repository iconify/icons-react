import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jkj35abos.css';
import '../../css/f/f_p8gj0ah.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jkj35abos"/><path class="f_p8gj0ah"/>`,
		"fallback": "energy-icons:magnet-20-bold",
	});
}

export default Component;
