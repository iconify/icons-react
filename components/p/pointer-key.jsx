import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oo2-_7upc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oo2-_7upc"/>`,
		"fallback": "tabler:pointer-key",
	});
}

export default Component;
