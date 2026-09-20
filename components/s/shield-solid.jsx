import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rb0bh0b5d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rb0bh0b5d"/>`,
		"fallback": "mynaui:shield-solid",
	});
}

export default Component;
