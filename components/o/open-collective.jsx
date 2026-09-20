import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tlq402btw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tlq402btw"/>`,
		"fallback": "thesvg-color:open-collective",
	});
}

export default Component;
