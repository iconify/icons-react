import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/biy5opbeq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="biy5opbeq"/>`,
		"fallback": "ri:tree-fill",
	});
}

export default Component;
