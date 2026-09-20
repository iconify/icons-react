import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l7a86-bsv.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l7a86-bsv"/>`,
		"fallback": "roentgen:japan-post",
	});
}

export default Component;
