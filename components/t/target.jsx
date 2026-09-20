import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/ss89lq90u.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ss89lq90u"/>`,
		"fallback": "zondicons:target",
	});
}

export default Component;
