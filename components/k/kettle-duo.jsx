import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dgfukvbsk.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/y/y6-k7kb8b.css';
import '../../css/p/pxgwswq5k.css';
import '../../css/a/a8osghvet.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dgfukvbsk secondary"/><g class="dt0cm9dhy primary"><path class="y6-k7kb8b"/><path class="pxgwswq5k"/><path class="a8osghvet"/></g>`,
		"fallback": "iconaut:kettle-duo",
	});
}

export default Component;
