import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bo5hu07_i.css';
import '../../css/s/s7zqjx21v.css';
import '../../css/n/nyn8xjb3n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bo5hu07_i"/><path class="s7zqjx21v"/><path class="nyn8xjb3n"/>`,
		"fallback": "solar:ladle-bold-duotone",
	});
}

export default Component;
