import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ocawmz1rc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ocawmz1rc"/>`,
		"fallback": "iconoir:sweep-3d",
	});
}

export default Component;
