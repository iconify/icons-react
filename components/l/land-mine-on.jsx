import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e_v4g-bby.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e_v4g-bby"/>`,
		"fallback": "fa7-solid:land-mine-on",
	});
}

export default Component;
