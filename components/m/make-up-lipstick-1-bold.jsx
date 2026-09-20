import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j3qdx_-ml.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j3qdx_-ml"/>`,
		"fallback": "streamline-ultimate:make-up-lipstick-1-bold",
	});
}

export default Component;
