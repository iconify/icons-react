import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ry4ptt9wj.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ry4ptt9wj"/>`,
		"fallback": "heroicons:scale-20-solid",
	});
}

export default Component;
