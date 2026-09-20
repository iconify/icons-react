import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j90eycc1p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j90eycc1p"/>`,
		"fallback": "keyline-icons:store",
	});
}

export default Component;
