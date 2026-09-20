import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ef4d2rb5a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ef4d2rb5a"/>`,
		"fallback": "mynaui:play-circle-solid",
	});
}

export default Component;
