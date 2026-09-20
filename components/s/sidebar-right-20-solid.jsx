import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lxivfvbzu.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lxivfvbzu"/>`,
		"fallback": "sidekickicons:sidebar-right-20-solid",
	});
}

export default Component;
