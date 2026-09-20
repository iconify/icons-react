import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f0a6fcbyi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f0a6fcbyi"/>`,
		"fallback": "tabler:record-mail",
	});
}

export default Component;
