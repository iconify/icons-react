import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ey4_sobig.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ey4_sobig"/>`,
		"fallback": "maki:library-15",
	});
}

export default Component;
