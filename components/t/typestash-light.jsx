import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g5g7mrbhx.css';
import '../../css/h/hnc9r9bik.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g5g7mrbhx"/><path class="hnc9r9bik"/>`,
		"fallback": "selfhst:typestash-light",
	});
}

export default Component;
