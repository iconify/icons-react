import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qgjs0nvgu.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qgjs0nvgu"/>`,
		"fallback": "fa-solid:user-slash",
	});
}

export default Component;
