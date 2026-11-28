import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/f/fqmmacbbk.css';
import '../../css/o/oy7knh9mh.css';
import '../../css/f/fitl5vbyu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="fqmmacbbk"/><path class="oy7knh9mh"/><path class="fitl5vbyu"/></g>`,
		"fallback": "iconaut:plus-minus",
	});
}

export default Component;
