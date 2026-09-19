import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p_j688pvo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p_j688pvo"/>`,
		"fallback": "basil:phone-off-solid",
	});
}

export default Component;
