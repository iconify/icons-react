import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/phq25ng7e.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="phq25ng7e"/>`,
		"fallback": "energy-icons:sun-dim-20",
	});
}

export default Component;
