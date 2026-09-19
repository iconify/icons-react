import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ary-g3wyv.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ary-g3wyv"/>`,
		"fallback": "fa-solid:magnet",
	});
}

export default Component;
