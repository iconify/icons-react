import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ln7w7tbll.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ln7w7tbll"/>`,
		"fallback": "thesvg-color:thangs",
	});
}

export default Component;
