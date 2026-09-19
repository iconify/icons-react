import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/adjk5db7b.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="adjk5db7b"/>`,
		"fallback": "fa7-solid:pump-medical",
	});
}

export default Component;
