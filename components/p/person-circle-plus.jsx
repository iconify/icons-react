import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tswgnqbjc.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tswgnqbjc"/>`,
		"fallback": "fa7-solid:person-circle-plus",
	});
}

export default Component;
