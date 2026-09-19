import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qnx5vacuw.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qnx5vacuw"/>`,
		"fallback": "fa6-solid:plug-circle-check",
	});
}

export default Component;
