import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w_e3yyfss.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="primary w_e3yyfss"/>`,
		"fallback": "iconaut:union-duotone",
	});
}

export default Component;
