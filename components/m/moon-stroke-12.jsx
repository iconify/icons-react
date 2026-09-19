import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dpsk3tlwx.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dpsk3tlwx"/>`,
		"fallback": "garden:moon-stroke-12",
	});
}

export default Component;
