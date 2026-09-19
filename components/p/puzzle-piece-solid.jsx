import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yp_um7ciw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yp_um7ciw"/>`,
		"fallback": "heroicons:puzzle-piece-solid",
	});
}

export default Component;
