import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yudl5ebcs.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yudl5ebcs"/>`,
		"fallback": "sidekickicons:robot-16-solid",
	});
}

export default Component;
