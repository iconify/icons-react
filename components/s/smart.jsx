import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/ty9_rmboq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ty9_rmboq"/>`,
		"fallback": "cbi:smart",
	});
}

export default Component;
