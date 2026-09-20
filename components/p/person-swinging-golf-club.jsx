import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fzmjben7j.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fzmjben7j"/>`,
		"fallback": "pinhead:person-swinging-golf-club",
	});
}

export default Component;
