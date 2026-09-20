import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fhnuj049q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fhnuj049q"/>`,
		"fallback": "tabler:number-39-small",
	});
}

export default Component;
