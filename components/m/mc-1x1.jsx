import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nv9qcacyl.css';
import '../../css/k/krvb6vbdu.css';
import '../../css/d/d79ru3bml.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nv9qcacyl"><path class="krvb6vbdu"/><path class="d79ru3bml"/></g>`,
		"fallback": "flag:mc-1x1",
	});
}

export default Component;
