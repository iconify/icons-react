import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p2o5l269j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p2o5l269j"/>`,
		"fallback": "hugeicons:laptop",
	});
}

export default Component;
