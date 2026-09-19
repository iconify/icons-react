import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ezto7sb-x.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ezto7sb-x"/>`,
		"fallback": "heroicons:list-bullet-16-solid",
	});
}

export default Component;
