import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bydu8rkje.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bydu8rkje"/>`,
		"fallback": "iconoir:voice-check",
	});
}

export default Component;
