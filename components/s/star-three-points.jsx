import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l1f4vabqi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l1f4vabqi"/>`,
		"fallback": "mdi:star-three-points",
	});
}

export default Component;
