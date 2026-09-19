import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qv3eiyb7h.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qv3eiyb7h"/>`,
		"fallback": "dashicons:media-spreadsheet",
	});
}

export default Component;
