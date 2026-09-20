import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rn5ognboi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rn5ognboi"/>`,
		"fallback": "mynaui:link-one-solid",
	});
}

export default Component;
