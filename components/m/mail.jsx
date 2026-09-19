import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/j/jdkh_nbgk.css';
import '../../css/s/sy-vmkanq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="jdkh_nbgk"/><path class="sy-vmkanq"/></g>`,
		"fallback": "iconoir:mail",
	});
}

export default Component;
