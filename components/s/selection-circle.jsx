import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz9z_2a2g.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nz9z_2a2g"/>`,
		"fallback": "at-icons:selection-circle",
	});
}

export default Component;
