import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z64gnu31o.css';

const viewBox = {"width":11,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z64gnu31o"/>`,
		"fallback": "fontisto:mongodb",
	});
}

export default Component;
