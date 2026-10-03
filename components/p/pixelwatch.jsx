import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/db17s4j6f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="db17s4j6f"/>`,
		"fallback": "cbi:pixelwatch",
	});
}

export default Component;
