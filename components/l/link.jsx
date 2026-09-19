import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/adiuo_lei.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="adiuo_lei"/>`,
		"fallback": "fa6-solid:link",
	});
}

export default Component;
