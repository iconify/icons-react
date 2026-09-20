import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dfq33mb_c.css';

const viewBox = {"width":500,"height":500};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dfq33mb_c"/>`,
		"fallback": "material-icon-theme:stan",
	});
}

export default Component;
