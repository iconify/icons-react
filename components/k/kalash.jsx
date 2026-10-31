import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/k/kb9disyks.css';
import '../../css/p/p4wj6ib0m.css';
import '../../css/o/oj3ir01bd.css';
import '../../css/n/nbbeicyqz.css';
import '../../css/u/urjb3e0xd.css';
import '../../css/t/thxy73aol.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="kb9disyks wm-shadow"/><path class="p4wj6ib0m"/><path class="oj3ir01bd"/><path class="nbbeicyqz"/><path class="urjb3e0xd"/><path class="thxy73aol"/></g>`,
		"fallback": "withicons-retro:kalash",
	});
}

export default Component;
