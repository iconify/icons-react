import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gsw-e1bdb.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gsw-e1bdb"/>`,
		"fallback": "fa6-solid:medal",
	});
}

export default Component;
