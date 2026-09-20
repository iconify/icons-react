import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j-2k72xgs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j-2k72xgs"/>`,
		"fallback": "mdi:synagogue",
	});
}

export default Component;
