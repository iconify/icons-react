import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/srw_o6t-n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="srw_o6t-n"/>`,
		"fallback": "noviair:safe",
	});
}

export default Component;
