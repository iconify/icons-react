import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a7yio4ctw.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a7yio4ctw"/>`,
		"fallback": "bi:puzzle-fill",
	});
}

export default Component;
