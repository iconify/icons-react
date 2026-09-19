import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rnm6697rl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rnm6697rl"/>`,
		"fallback": "cbi:shutter-30",
	});
}

export default Component;
