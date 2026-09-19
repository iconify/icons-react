import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yw39xqz4c.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yw39xqz4c"/>`,
		"fallback": "fa6-solid:person-dots-from-line",
	});
}

export default Component;
