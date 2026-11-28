import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a5f_9mbzx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a5f_9mbzx"/>`,
		"fallback": "noviair:server-x",
	});
}

export default Component;
