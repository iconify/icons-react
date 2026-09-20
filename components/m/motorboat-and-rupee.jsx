import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i106bb_zq.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i106bb_zq"/>`,
		"fallback": "pinhead:motorboat-and-rupee",
	});
}

export default Component;
