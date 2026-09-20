import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oa8y0ib7a.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oa8y0ib7a"/>`,
		"fallback": "streamline:pen-draw-remix",
	});
}

export default Component;
