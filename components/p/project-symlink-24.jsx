import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wsjs4_b4y.css';
import '../../css/c/ckbg2-b9z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wsjs4_b4y"/><path class="ckbg2-b9z"/>`,
		"fallback": "octicon:project-symlink-24",
	});
}

export default Component;
