import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vz11d19xp.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vz11d19xp"/>`,
		"fallback": "qlementine-icons:jump-16",
	});
}

export default Component;
