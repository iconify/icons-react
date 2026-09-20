import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pqt7x9bsk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pqt7x9bsk"/>`,
		"fallback": "keyline-icons:sun-sharp",
	});
}

export default Component;
