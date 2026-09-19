import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xukg1wjzq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xukg1wjzq"/>`,
		"fallback": "grommet-icons:integration",
	});
}

export default Component;
