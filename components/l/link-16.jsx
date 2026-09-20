import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k6ktrib3l.css';
import '../../css/f/fxsetnwht.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k6ktrib3l"/><path class="fxsetnwht"/>`,
		"fallback": "qlementine-icons:link-16",
	});
}

export default Component;
