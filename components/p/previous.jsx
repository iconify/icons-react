import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g3u8k5bia.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path vector-effect="non-scaling-stroke" class="g3u8k5bia"/>`,
		"fallback": "wordpress:previous",
	});
}

export default Component;
