import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tg-yxldyv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tg-yxldyv"/>`,
		"fallback": "cbi:reolink-820",
	});
}

export default Component;
