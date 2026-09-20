import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dm-k4xbfa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dm-k4xbfa"/>`,
		"fallback": "simple-icons:m5stack",
	});
}

export default Component;
