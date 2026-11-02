import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tar_hac0r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tar_hac0r"/>`,
		"fallback": "mingcute:sunflower-fill",
	});
}

export default Component;
