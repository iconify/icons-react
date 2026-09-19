import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xxd94ib7h.css';

const viewBox = {"width":31,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xxd94ib7h"/>`,
		"fallback": "fontisto:volume-down",
	});
}

export default Component;
