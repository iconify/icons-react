import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/f/f6q6bbc7u.css';
import '../../css/y/ylp_vncrn.css';
import '../../css/g/gya453bci.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><path class="f6q6bbc7u"/><path class="ylp_vncrn"/><path class="gya453bci"/></g>`,
		"fallback": "icon-park-outline:movie",
	});
}

export default Component;
