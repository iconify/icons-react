import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hikc9m3jn.css';

const viewBox = {"width":25,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hikc9m3jn"/>`,
		"fallback": "lineicons:sort-high-to-low",
	});
}

export default Component;
