import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/awox36b6z.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="awox36b6z"/>`,
		"fallback": "la:pager-solid",
	});
}

export default Component;
