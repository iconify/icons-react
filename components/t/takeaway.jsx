import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casto_bef.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="casto_bef"/>`,
		"fallback": "boxicons:takeaway",
	});
}

export default Component;
