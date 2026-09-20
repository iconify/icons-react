import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mbm_tg5ho.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mbm_tg5ho"/>`,
		"fallback": "uil:pentagon",
	});
}

export default Component;
