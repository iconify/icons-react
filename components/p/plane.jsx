import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lvh9_ktkd.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lvh9_ktkd"/>`,
		"fallback": "fa6-solid:plane",
	});
}

export default Component;
