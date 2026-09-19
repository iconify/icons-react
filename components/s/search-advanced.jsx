import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sli08-0ex.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sli08-0ex"/>`,
		"fallback": "carbon:search-advanced",
	});
}

export default Component;
