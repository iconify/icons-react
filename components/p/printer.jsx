import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pf7wotbtx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pf7wotbtx"/>`,
		"fallback": "proicons:printer",
	});
}

export default Component;
