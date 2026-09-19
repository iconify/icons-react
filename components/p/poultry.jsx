import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iguir7bsj.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iguir7bsj"/>`,
		"fallback": "at-icons:poultry",
	});
}

export default Component;
