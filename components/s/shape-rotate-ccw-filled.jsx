import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xnha371ox.css';
import '../../css/o/o6hj5abyd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xnha371ox"/><path class="o6hj5abyd"/>`,
		"fallback": "boxicons:shape-rotate-ccw-filled",
	});
}

export default Component;
