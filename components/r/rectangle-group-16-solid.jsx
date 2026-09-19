import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/as8c1x0lp.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="as8c1x0lp"/>`,
		"fallback": "heroicons:rectangle-group-16-solid",
	});
}

export default Component;
