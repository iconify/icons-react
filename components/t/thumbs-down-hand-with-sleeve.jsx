import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kt--_cb4a.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kt--_cb4a"/>`,
		"fallback": "pinhead:thumbs-down-hand-with-sleeve",
	});
}

export default Component;
