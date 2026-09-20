import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pgb0fnbow.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pgb0fnbow"/>`,
		"fallback": "uil:link-h",
	});
}

export default Component;
