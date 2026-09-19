import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/leex_ib_x.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="leex_ib_x"/>`,
		"fallback": "heroicons-solid:search",
	});
}

export default Component;
