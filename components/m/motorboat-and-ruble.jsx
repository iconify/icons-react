import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mtqgm_p1r.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mtqgm_p1r"/>`,
		"fallback": "pinhead:motorboat-and-ruble",
	});
}

export default Component;
