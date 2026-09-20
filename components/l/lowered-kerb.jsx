import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/edo1bac0p.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="edo1bac0p"/>`,
		"fallback": "roentgen:lowered-kerb",
	});
}

export default Component;
