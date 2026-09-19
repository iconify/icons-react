import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sw8gdcc6t.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sw8gdcc6t"/>`,
		"fallback": "fa6-solid:user-plus",
	});
}

export default Component;
