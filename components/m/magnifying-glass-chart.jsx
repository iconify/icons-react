import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft-r9nblv.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ft-r9nblv"/>`,
		"fallback": "fa7-solid:magnifying-glass-chart",
	});
}

export default Component;
