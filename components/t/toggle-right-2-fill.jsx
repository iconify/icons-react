import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ygz__nb3d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ygz__nb3d"/>`,
		"fallback": "mingcute:toggle-right-2-fill",
	});
}

export default Component;
