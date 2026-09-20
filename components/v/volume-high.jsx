import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/a/a0kcj6vvf.css';
import '../../css/x/xvqxteest.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="a0kcj6vvf"/><path class="xvqxteest"/></g>`,
		"fallback": "reicon:volume-high",
	});
}

export default Component;
