import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e-phwvw3d.css';

const viewBox = {"width":11,"height":11};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e-phwvw3d"/>`,
		"fallback": "maki:mobile-phone-11",
	});
}

export default Component;
