import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q8md-gbri.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="q8md-gbri"/>`,
		"fallback": "qlementine-icons:items-grid-small-16",
	});
}

export default Component;
