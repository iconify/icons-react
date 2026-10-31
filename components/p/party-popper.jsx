import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/i/iy079poob.css';
import '../../css/m/mmz9a3bma.css';
import '../../css/d/dbvcyhb4q.css';
import '../../css/f/fikhfsbjl.css';
import '../../css/e/exhnsok7e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="iy079poob wm-shadow"/><path class="mmz9a3bma"/><path class="dbvcyhb4q"/><path class="fikhfsbjl"/><path class="exhnsok7e wm-s"/></g>`,
		"fallback": "withicons-retro:party-popper",
	});
}

export default Component;
