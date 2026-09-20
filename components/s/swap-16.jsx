import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z0vu_ab6n.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z0vu_ab6n"/>`,
		"fallback": "qlementine-icons:swap-16",
	});
}

export default Component;
