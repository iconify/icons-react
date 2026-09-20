import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zmgslx9mt.css';

const viewBox = {"width":11,"height":11};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zmgslx9mt"/>`,
		"fallback": "maki:triangle-stroked-11",
	});
}

export default Component;
