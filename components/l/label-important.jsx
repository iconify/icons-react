import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sixp9ubys.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sixp9ubys"/>`,
		"fallback": "hugeicons:label-important",
	});
}

export default Component;
