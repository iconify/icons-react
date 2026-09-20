import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ocbd0c1lk.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ocbd0c1lk"/>`,
		"fallback": "sidekickicons:view-split-20-solid",
	});
}

export default Component;
