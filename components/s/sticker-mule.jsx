import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lvge0qb3o.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lvge0qb3o"/>`,
		"fallback": "fa-brands:sticker-mule",
	});
}

export default Component;
