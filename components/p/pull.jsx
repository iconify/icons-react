import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x8qo6bn4e.css';

const viewBox = {"width":831,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x8qo6bn4e"/>`,
		"fallback": "whh:pull",
	});
}

export default Component;
