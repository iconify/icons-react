import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/noo7pfbdf.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/p/pho0ors8b.css';
import '../../css/l/lq2untbyp.css';
import '../../css/o/otcj4vp7z.css';
import '../../css/r/r6f24-9zg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="noo7pfbdf secondary"/><g class="dt0cm9dhy primary"><path class="pho0ors8b"/><path class="lq2untbyp"/><path class="otcj4vp7z"/><path class="r6f24-9zg"/></g>`,
		"fallback": "iconaut:tractor-duo",
	});
}

export default Component;
