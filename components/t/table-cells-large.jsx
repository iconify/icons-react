import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z_h70ea7d.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z_h70ea7d"/>`,
		"fallback": "fa7-solid:table-cells-large",
	});
}

export default Component;
