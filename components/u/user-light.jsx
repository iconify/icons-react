import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pr52f_b5y.css';
import '../../css/i/ic08mpydp.css';
import '../../css/f/f439rob6g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="pr52f_b5y"><path class="ic08mpydp"/><circle class="f439rob6g"/></g>`,
		"fallback": "lets-icons:user-light",
	});
}

export default Component;
