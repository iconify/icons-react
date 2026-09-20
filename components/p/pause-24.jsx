import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n75uy8bxo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n75uy8bxo"/>`,
		"fallback": "qlementine-icons:pause-24",
	});
}

export default Component;
