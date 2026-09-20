import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v803brfqk.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="v803brfqk"/>`,
		"fallback": "qlementine-icons:separation-horizontal-16",
	});
}

export default Component;
