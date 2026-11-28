import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xclfi9b_d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xclfi9b_d"/>`,
		"fallback": "noviair-light:messages-x",
	});
}

export default Component;
