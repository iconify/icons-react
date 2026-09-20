import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l8dx6q3cz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l8dx6q3cz"/>`,
		"fallback": "keyline-icons:user-sharp",
	});
}

export default Component;
