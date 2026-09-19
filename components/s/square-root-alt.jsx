import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qz16embsv.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qz16embsv"/>`,
		"fallback": "fa-solid:square-root-alt",
	});
}

export default Component;
