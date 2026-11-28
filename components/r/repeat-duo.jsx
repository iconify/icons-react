import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/t/tm71hluex.css';
import '../../css/u/u33-yabev.css';
import '../../css/b/b529e0bmt.css';
import '../../css/i/i_zq9xbjb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="tm71hluex"/><path class="u33-yabev"/><path class="b529e0bmt"/><path class="i_zq9xbjb"/></g>`,
		"fallback": "iconaut:repeat-duo",
	});
}

export default Component;
