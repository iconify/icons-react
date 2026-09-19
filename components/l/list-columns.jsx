import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/arn344fbj.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="arn344fbj"/>`,
		"fallback": "bi:list-columns",
	});
}

export default Component;
