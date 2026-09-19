import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a9r-peody.css';

const viewBox = {"width":432,"height":432};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a9r-peody"/>`,
		"fallback": "zmdi:mood-bad",
	});
}

export default Component;
