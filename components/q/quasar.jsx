import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c8be0us_j.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c8be0us_j"/>`,
		"fallback": "file-icons:quasar",
	});
}

export default Component;
