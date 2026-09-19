import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lodm-2b5w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lodm-2b5w"/>`,
		"fallback": "griddy-icons:moon-filled",
	});
}

export default Component;
