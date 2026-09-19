import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/l/l76t_z2em.css';
import '../../css/w/wffly8bci.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="l76t_z2em"/><path class="wffly8bci"/></g>`,
		"fallback": "iconoir:magic-wand",
	});
}

export default Component;
