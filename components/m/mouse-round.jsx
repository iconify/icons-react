import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nv1nz2brt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nv1nz2brt"/>`,
		"fallback": "coolicons:mouse-round",
	});
}

export default Component;
