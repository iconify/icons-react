import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1_4_9lhq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n1_4_9lhq"/>`,
		"fallback": "mdi-light:repeat",
	});
}

export default Component;
