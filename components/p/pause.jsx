import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lbfkytbld.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="lbfkytbld"/>`,
		"fallback": "pajamas:pause",
	});
}

export default Component;
