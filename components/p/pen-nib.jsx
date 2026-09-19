import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/etj1qgb9p.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="etj1qgb9p"/>`,
		"fallback": "fa7-solid:pen-nib",
	});
}

export default Component;
