import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vf88nib1g.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/j/jgrtmnhmi.css';
import '../../css/x/x2xkjsa7t.css';
import '../../css/d/dw-bckwxb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="secondary vf88nib1g"/><g class="dt0cm9dhy primary"><path class="jgrtmnhmi"/><path class="x2xkjsa7t"/><path class="dw-bckwxb"/></g>`,
		"fallback": "iconaut:list-pin-duo",
	});
}

export default Component;
