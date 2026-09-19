import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hx9xdw4tp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hx9xdw4tp"/>`,
		"fallback": "boxicons:table-cells-large",
	});
}

export default Component;
