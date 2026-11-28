import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/y/yzkly3sbo.css';
import '../../css/w/w9rxeebaz.css';
import '../../css/f/fof5_7bik.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="yzkly3sbo"/><path class="w9rxeebaz"/><path class="fof5_7bik"/></g>`,
		"fallback": "iconaut:unfold-vertical",
	});
}

export default Component;
