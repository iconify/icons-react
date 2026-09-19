import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x2i_l0snn.css';

const viewBox = {"width":320,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x2i_l0snn"/>`,
		"fallback": "fa-solid:sort",
	});
}

export default Component;
