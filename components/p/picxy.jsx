import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/px7f85dfn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="px7f85dfn"/>`,
		"fallback": "simple-icons:picxy",
	});
}

export default Component;
