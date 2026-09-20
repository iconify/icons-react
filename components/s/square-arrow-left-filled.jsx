import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jpkq7ob1n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jpkq7ob1n"/>`,
		"fallback": "tabler:square-arrow-left-filled",
	});
}

export default Component;
