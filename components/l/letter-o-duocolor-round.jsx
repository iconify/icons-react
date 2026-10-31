import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c-d7dab2a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c-d7dab2a"/>`,
		"fallback": "coolicons:letter-o-duocolor-round",
	});
}

export default Component;
