import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xr5dqqb6v.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="xr5dqqb6v"/>`,
		"fallback": "heroicons:pause-circle-20-solid",
	});
}

export default Component;
