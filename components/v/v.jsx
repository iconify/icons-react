import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xp7upebym.css';
import '../../css/t/t_lvzblrs.css';
import '../../css/v/viyqlk6iu.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xp7upebym"><path class="t_lvzblrs"/><path class="viyqlk6iu"/></g>`,
		"fallback": "catppuccin:v",
	});
}

export default Component;
