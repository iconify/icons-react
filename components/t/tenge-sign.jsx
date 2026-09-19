import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l7rp-2o6j.css';

const viewBox = {"width":384,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l7rp-2o6j"/>`,
		"fallback": "fa6-solid:tenge-sign",
	});
}

export default Component;
