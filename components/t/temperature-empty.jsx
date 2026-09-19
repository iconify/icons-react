import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gm8kqfbpa.css';

const viewBox = {"width":320,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gm8kqfbpa"/>`,
		"fallback": "fa6-solid:temperature-empty",
	});
}

export default Component;
