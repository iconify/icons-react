import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e3ztewbfh.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/z/z4sa4nigm.css';
import '../../css/p/ppoyyub2b.css';
import '../../css/n/n1lvnpb3w.css';
import '../../css/e/evr6dx0yp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e3ztewbfh secondary"/><g class="dt0cm9dhy primary"><path class="z4sa4nigm"/><path class="ppoyyub2b"/><path class="n1lvnpb3w"/><path class="evr6dx0yp"/></g>`,
		"fallback": "iconaut:spray-can-duo",
	});
}

export default Component;
