import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c6-58lbbr.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c6-58lbbr"/>`,
		"fallback": "sidekickicons:robot-20-solid",
	});
}

export default Component;
