import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/h/h0di04cct.css';
import '../../css/w/wrptp5blq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="h0di04cct"/><path class="wrptp5blq"/></g>`,
		"fallback": "iconoir:post",
	});
}

export default Component;
