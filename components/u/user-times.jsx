import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n95vlaczn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n95vlaczn"/>`,
		"fallback": "uil:user-times",
	});
}

export default Component;
