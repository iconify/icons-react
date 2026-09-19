import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lhn3ibcer.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lhn3ibcer"/>`,
		"fallback": "fa6-solid:user-check",
	});
}

export default Component;
