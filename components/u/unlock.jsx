import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r0y3-5b7t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r0y3-5b7t"/>`,
		"fallback": "prime:unlock",
	});
}

export default Component;
