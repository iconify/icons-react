import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zai59nb_x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zai59nb_x"/>`,
		"fallback": "coolicons:square-close-round",
	});
}

export default Component;
