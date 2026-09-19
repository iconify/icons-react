import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x-bz3w_qv.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x-bz3w_qv"/>`,
		"fallback": "fa7-solid:repeat",
	});
}

export default Component;
