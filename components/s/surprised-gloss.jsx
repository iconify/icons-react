import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ups3wbcvu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ups3wbcvu"/>`,
		"fallback": "withicons:surprised-gloss",
	});
}

export default Component;
