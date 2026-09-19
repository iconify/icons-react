import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r9uz-ybvs.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="r9uz-ybvs"/>`,
		"fallback": "heroicons-solid:selector",
	});
}

export default Component;
