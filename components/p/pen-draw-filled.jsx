import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rb5j8cb2i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rb5j8cb2i"/>`,
		"fallback": "boxicons:pen-draw-filled",
	});
}

export default Component;
