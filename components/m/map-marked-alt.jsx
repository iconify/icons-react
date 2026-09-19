import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b1p808bqf.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b1p808bqf"/>`,
		"fallback": "fa-solid:map-marked-alt",
	});
}

export default Component;
