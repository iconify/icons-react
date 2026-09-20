import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/su3k7ebjq.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="su3k7ebjq"/>`,
		"fallback": "selfhst:rclone-dark",
	});
}

export default Component;
