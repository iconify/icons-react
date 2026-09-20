import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lqarkh7mf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lqarkh7mf"/>`,
		"fallback": "lineicons:jcb",
	});
}

export default Component;
