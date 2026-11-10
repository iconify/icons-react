import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d3q8zwb7m.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="d3q8zwb7m"/>`,
		"fallback": "sidekickicons:shield-plus-16-solid",
	});
}

export default Component;
