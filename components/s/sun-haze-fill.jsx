import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aa2e7s9da.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aa2e7s9da"/>`,
		"fallback": "f7:sun-haze-fill",
	});
}

export default Component;
