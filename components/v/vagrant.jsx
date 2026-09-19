import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y0vyxlb-d.css';

const viewBox = {"width":508,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y0vyxlb-d"/>`,
		"fallback": "file-icons:vagrant",
	});
}

export default Component;
