import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o6d0c85zb.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o6d0c85zb"/>`,
		"fallback": "sidekickicons:sidebar-left-20-solid",
	});
}

export default Component;
