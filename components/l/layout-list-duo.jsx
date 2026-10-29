import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/l/lxc2iobbl.css';
import '../../css/t/trdla8jeo.css';
import '../../css/t/t9g5kvbye.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="lxc2iobbl"/><path class="trdla8jeo wm-a"/><path class="t9g5kvbye"/></g>`,
		"fallback": "withicons:layout-list-duo",
	});
}

export default Component;
