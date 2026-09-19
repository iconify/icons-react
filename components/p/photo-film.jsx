import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pd0elh16c.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pd0elh16c"/>`,
		"fallback": "fa6-solid:photo-film",
	});
}

export default Component;
