import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qaj23_bvz.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qaj23_bvz"/>`,
		"fallback": "fa-solid:thumbs-up",
	});
}

export default Component;
