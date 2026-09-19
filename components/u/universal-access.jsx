import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yksnpqvwk.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yksnpqvwk"/>`,
		"fallback": "fa6-solid:universal-access",
	});
}

export default Component;
