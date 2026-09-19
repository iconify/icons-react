import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv1g0uw2g.css';
import '../../css/p/phh4k69ce.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="sv1g0uw2g"/><path class="phh4k69ce"/>`,
		"fallback": "basil:user-plus-outline",
	});
}

export default Component;
