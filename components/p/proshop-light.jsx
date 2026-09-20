import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mino6h8rx.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mino6h8rx"/>`,
		"fallback": "selfhst:proshop-light",
	});
}

export default Component;
