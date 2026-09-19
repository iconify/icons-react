import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m479ju5zl.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m479ju5zl"/>`,
		"fallback": "fa7-solid:shuttle-van",
	});
}

export default Component;
