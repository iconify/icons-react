import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pdte2eblv.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pdte2eblv"/>`,
		"fallback": "fa7-solid:microchip",
	});
}

export default Component;
