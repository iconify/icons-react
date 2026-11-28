import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m1ovthbog.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/t/tre2nwb3v.css';
import '../../css/m/mx-0x3bae.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m1ovthbog secondary"/><g class="dt0cm9dhy primary"><path class="tre2nwb3v"/><path class="mx-0x3bae"/></g>`,
		"fallback": "iconaut:sunflower-duo",
	});
}

export default Component;
