import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/skpsf7bnt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="skpsf7bnt"/>`,
		"fallback": "withicons:scissors-gloss",
	});
}

export default Component;
