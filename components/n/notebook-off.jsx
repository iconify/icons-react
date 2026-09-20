import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l8av-xybj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l8av-xybj"/>`,
		"fallback": "tabler:notebook-off",
	});
}

export default Component;
