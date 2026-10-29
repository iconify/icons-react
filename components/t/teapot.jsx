import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/r/r-nxp722e.css';
import '../../css/c/c9t42sbli.css';
import '../../css/t/t2177ccar.css';
import '../../css/h/hsjegpbhu.css';
import '../../css/i/iwm6coyho.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="r-nxp722e"/><path class="c9t42sbli wm-a"/><path class="t2177ccar wm-s"/><path class="hsjegpbhu"/><path class="iwm6coyho wm-a"/></g>`,
		"fallback": "withicons:teapot",
	});
}

export default Component;
