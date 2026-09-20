import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iz1or2rab.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iz1or2rab"/>`,
		"fallback": "meteor-icons:turn-left-up",
	});
}

export default Component;
