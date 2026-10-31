import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vj80a9b2y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vj80a9b2y"/>`,
		"fallback": "coolicons:scale-round",
	});
}

export default Component;
