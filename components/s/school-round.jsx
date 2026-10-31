import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jacd5s40q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jacd5s40q"/>`,
		"fallback": "coolicons:school-round",
	});
}

export default Component;
