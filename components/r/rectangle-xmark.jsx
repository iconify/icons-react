import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xo7aw631a.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xo7aw631a"/>`,
		"fallback": "fa6-solid:rectangle-xmark",
	});
}

export default Component;
