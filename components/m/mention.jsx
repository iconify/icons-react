import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lwy_mrx2z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lwy_mrx2z"/>`,
		"fallback": "proicons:mention",
	});
}

export default Component;
