import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oj52scc1s.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oj52scc1s"/>`,
		"fallback": "fa6-solid:user-minus",
	});
}

export default Component;
