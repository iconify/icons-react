import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ig7r6rpsg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ig7r6rpsg"/>`,
		"fallback": "withicons:stop-solid",
	});
}

export default Component;
