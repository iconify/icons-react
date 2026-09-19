import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/md09hy4px.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="md09hy4px"/>`,
		"fallback": "hugeicons:mouse-pointer-off-01",
	});
}

export default Component;
