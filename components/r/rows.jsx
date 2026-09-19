import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lbtm1819t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lbtm1819t"/>`,
		"fallback": "boxicons:rows",
	});
}

export default Component;
