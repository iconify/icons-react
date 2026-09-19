import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i5-mp9b5c.css';

const viewBox = {"width":1536,"height":1536};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i5-mp9b5c"/>`,
		"fallback": "fa:meh-o",
	});
}

export default Component;
