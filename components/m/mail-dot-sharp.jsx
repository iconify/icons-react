import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gm1jblb7i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gm1jblb7i"/>`,
		"fallback": "keyline-icons:mail-dot-sharp",
	});
}

export default Component;
