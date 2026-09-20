import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/slvdg_bgm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="slvdg_bgm"/>`,
		"fallback": "mynaui:seven-square-solid",
	});
}

export default Component;
