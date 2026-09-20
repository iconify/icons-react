import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/ktib8bc0r.css';
import '../../css/d/d-ndadbbh.css';
import '../../css/e/eizmfdbvz.css';
import '../../css/z/ze9j0_baw.css';
import '../../css/p/pfgal7biz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ktib8bc0r"/><path class="d-ndadbbh"/><path class="eizmfdbvz"/><path class="ze9j0_baw"/><path class="pfgal7biz"/></g>`,
		"fallback": "streamline-ultimate-color:task-list-approve",
	});
}

export default Component;
