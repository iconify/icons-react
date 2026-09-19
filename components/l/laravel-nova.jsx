import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ld5lf-b5t.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ld5lf-b5t"/>`,
		"fallback": "cib:laravel-nova",
	});
}

export default Component;
