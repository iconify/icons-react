import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aacu17bhl.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aacu17bhl"/>`,
		"fallback": "heroicons-solid:megaphone",
	});
}

export default Component;
