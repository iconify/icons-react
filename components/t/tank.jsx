import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e-8jss4sq.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e-8jss4sq"/>`,
		"fallback": "at-icons:tank",
	});
}

export default Component;
