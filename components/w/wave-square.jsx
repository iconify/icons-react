import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lvi4p0sbw.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lvi4p0sbw"/>`,
		"fallback": "fa6-solid:wave-square",
	});
}

export default Component;
