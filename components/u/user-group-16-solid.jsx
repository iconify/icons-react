import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ohga79bvu.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ohga79bvu"/>`,
		"fallback": "heroicons:user-group-16-solid",
	});
}

export default Component;
