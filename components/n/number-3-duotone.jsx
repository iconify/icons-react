import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zu2np_b8u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zu2np_b8u"/>`,
		"fallback": "iconamoon:number-3-duotone",
	});
}

export default Component;
