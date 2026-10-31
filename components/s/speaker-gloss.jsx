import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/coos0r0bu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="coos0r0bu"/>`,
		"fallback": "withicons:speaker-gloss",
	});
}

export default Component;
