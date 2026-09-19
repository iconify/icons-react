import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b84pof_2w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b84pof_2w"/>`,
		"fallback": "iconoir:sort-down",
	});
}

export default Component;
