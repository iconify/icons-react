import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y6uzf-99s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y6uzf-99s"/>`,
		"fallback": "boxicons:move-diagonal-right",
	});
}

export default Component;
