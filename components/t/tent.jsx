import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ye2rk2b4r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ye2rk2b4r"/>`,
		"fallback": "noviair:tent",
	});
}

export default Component;
