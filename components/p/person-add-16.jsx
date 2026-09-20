import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ib_u0zbdt.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ib_u0zbdt"/>`,
		"fallback": "octicon:person-add-16",
	});
}

export default Component;
