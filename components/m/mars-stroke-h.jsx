import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/imfk8xh_s.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="imfk8xh_s"/>`,
		"fallback": "fa7-solid:mars-stroke-h",
	});
}

export default Component;
