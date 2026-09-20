import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kvfa_t.css';
import '../../css/s/so-from-62.css';
import '../../css/f/fill-to-1.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kvfa_t"/>`,
		"fallback": "line-md:moon-simple-filled",
	});
}

export default Component;
