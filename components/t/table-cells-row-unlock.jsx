import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h1zf47b8j.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h1zf47b8j"/>`,
		"fallback": "fa6-solid:table-cells-row-unlock",
	});
}

export default Component;
