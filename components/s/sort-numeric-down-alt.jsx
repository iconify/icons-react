import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kgy4hvbmk.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kgy4hvbmk"/>`,
		"fallback": "fa-solid:sort-numeric-down-alt",
	});
}

export default Component;
