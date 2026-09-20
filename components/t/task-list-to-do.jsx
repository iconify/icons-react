import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/ktib8bc0r.css';
import '../../css/y/yritneboz.css';
import '../../css/e/eizmfdbvz.css';
import '../../css/x/xnn95pq6a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ktib8bc0r"/><path class="yritneboz"/><path class="eizmfdbvz"/><path class="xnn95pq6a"/></g>`,
		"fallback": "streamline-ultimate-color:task-list-to-do",
	});
}

export default Component;
