import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ym7_kkb1p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ym7_kkb1p"/>`,
		"fallback": "iconaut:puzzle-check-solid",
	});
}

export default Component;
