import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pt98fkbcu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pt98fkbcu"/>`,
		"fallback": "keyline-icons:package-minus-sharp",
	});
}

export default Component;
