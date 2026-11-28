import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qxly0_vhn.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qxly0_vhn"/>`,
		"fallback": "pullo:user-circle-star-light",
	});
}

export default Component;
