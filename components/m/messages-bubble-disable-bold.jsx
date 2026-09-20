import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h77mg_bfz.css';
import '../../css/h/h4gz_jbet.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h77mg_bfz"/><path class="h4gz_jbet"/>`,
		"fallback": "streamline-ultimate:messages-bubble-disable-bold",
	});
}

export default Component;
