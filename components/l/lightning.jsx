import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rjvaacb8d.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rjvaacb8d"/>`,
		"fallback": "bi:lightning",
	});
}

export default Component;
