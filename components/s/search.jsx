import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hs7gssbtl.css';
import '../../css/s/s1qbw8bvu.css';

const viewBox = {"width":40,"height":40};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hs7gssbtl"/><path class="s1qbw8bvu"/>`,
		"fallback": "iwwa:search",
	});
}

export default Component;
