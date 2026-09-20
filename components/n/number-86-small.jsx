import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g6cof4bty.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g6cof4bty"/>`,
		"fallback": "tabler:number-86-small",
	});
}

export default Component;
