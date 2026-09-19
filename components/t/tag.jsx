import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bwlpnt-mr.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bwlpnt-mr"/>`,
		"fallback": "fa-solid:tag",
	});
}

export default Component;
