import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iyo_5k1_u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iyo_5k1_u"/>`,
		"fallback": "iconoir:reduce",
	});
}

export default Component;
